
/** @ts-ignore */
import { Date } from 'arjuna';

import morgan, { FormatFn } from 'morgan';
import path from 'path';
import { createStream } from 'rotating-file-stream';

import { AccessLogSetting } from '../contracts/type/AccessLogSetting';

export default class AccessLog
{

  make(setting: AccessLogSetting)
  {
    const logFormats: FormatFn = (tokens, req, res) => {
      return [
        tokens['remote-addr'](req, res),
        tokens['remote-user'](req, res),
        tokens.date(req, res, 'iso'),
        `HTTP/${tokens['http-version'](req, res)}`,
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        `${tokens['response-time'](req, res)}ms`,
        `LNG: ${(tokens.res(req, res, 'content-length'))}`,
        `REF: ${(tokens.referrer(req, res))}`,
        `UA: ${(tokens['user-agent'](req, res))}`,
      ].join(' | ');
    };

    return morgan(logFormats, { 
      stream: createStream(Date.getOnlyDate() + '.log', {
        interval: setting.interval,
        path: path.join(`${__basedir}`, setting.path)
      })
    });
  }

}