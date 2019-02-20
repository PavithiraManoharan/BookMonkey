export class ErrorMessage {
  constructor(
    public forControl: string,
    public forValidator: string,
    public text: string
  ) {}
}
export const BookFormErrorMessages = [
  new ErrorMessage('title', 'required', 'Ein Buchtitel muss angegeben werden'),
  new ErrorMessage('id', 'required', 'Es muss eine ISBN angegeben werden'),
  new ErrorMessage('id', 'minlength', 'Die ISBN muss mindestens 10 Zeichen enthalten'),
  new ErrorMessage('id', 'maxlength', 'Eine ISBN darf höchstens 13 Zeichen haben'),
  new ErrorMessage('published', 'required', 'Es muss ein Erscheinungsdatum angegeben werden'),
  new ErrorMessage('authors', 'required', 'Es muss ein Autor angegeben werden'),
];
