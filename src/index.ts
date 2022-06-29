export class Log{
    static success(msg: string){
        console.log(`%c ${msg}`, 'color: #28a745')
    }
    static error(msg: string){
        console.log(`%c ${msg}`, 'color: #dc3545')
    }
    static warn(msg: string){
        console.log(`%c ${msg}`, 'color: #ffc107')
    }
    static info(msg: string){
        console.log(`%c ${msg}`, 'color: #007bff')
    }
}