export class AppError {
  public readonly message: string;
  public readonly statusCode: number;
  public static errorList: string[] = [];

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }

  public static convert(message: string): string {
    if (!this.errorList.includes(message)) {
      this.errorList.push(message);
    }
    return message;
  }
}
