export class FileService {

    csvToJson(csv: string, withHeaders: boolean = false): any {
        let lines = csv.split("\n");
        let result = [];
        let headers = lines[0].split(";");
        let rowStartIndex = (withHeaders) ? 1 : 0;
        for (let i = rowStartIndex;i < lines.length;i++){
            let obj = {};
            let line = lines[i].replace(/"/g , "");
            let currentline = line.split(";");
            for (let j = 0;j < headers.length;j++) {
                obj['key_' + j] = currentline[j];
            }
            result.push(obj);
        }
        return result;
    }
}
