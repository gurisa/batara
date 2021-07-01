
import { 
  Request as IRequest, 
  Response as IResponse, 
  NextFunction as INextFunction,
  ErrorRequestHandler as IErrorRequestHandler,
  ValidationChain 
} from '../contracts/interface/Http';

import IController from '../contracts/interface/Controller';
import IMap from "../contracts/interface/Map";

import Language from '../middlewares/Language';
import Validation from "../middlewares/Validation";

export default abstract class Controller implements IController
{

  abstract handle(req: IRequest, res: IResponse, next: INextFunction): any;
  abstract authorizeHandler(err: IErrorRequestHandler, req: IRequest, res: IResponse, next: INextFunction): any;
  abstract validationHandler(err: IErrorRequestHandler, req: IRequest, res: IResponse, next: INextFunction): any;

  authorize(req: IRequest, res: IResponse, next: INextFunction): void
  {
    next();
  }
  
  rules(): Array<ValidationChain>
  {
    return [];
  }

  attributes(): IMap
  {
    return {};
  }

  messages(): IMap
  {
    return {};
  }

  run(): Array<any>
  {
    return [
      new Language().handle,
      (req: IRequest, res: IResponse, next: INextFunction) => {
        const locale = req.locale.language;
        /**
         * CHOOSE TRANSLATION START WITH LOCALE
         * E.G: 
         * "id.custom_field": "Bidang isian kustom"
         * "en.custom_field": "Custom field"
         * 
         * When locale is "id" we choose "id.custom_field", etc
         * When there is no translation then we set to empty object
         */

        let attributes = this.attributes();
        for (let attributeKey in attributes) { 
          if (!attributeKey.startsWith(locale)) {
            delete attributes[attributeKey];
          }
        }

        let messages = this.messages();
        for (let attributeKey in messages) { 
          if (!attributeKey.startsWith(locale)) {
            delete messages[attributeKey];
          }
        }

        req._language.attributes = attributes;
        req._language.messages = messages;
        next();
      },
      this.authorize,
      this.authorizeHandler,
      this.rules(),
      new Validation().handle,
      this.validationHandler,
      this.handle
    ];
  }

}
