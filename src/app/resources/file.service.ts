export abstract class FileService {

    csvToJson<T>(csv: string, withHeaders?: boolean = false): T {
        let lines = csv.split("\n");
        let result = [];
        let headers = lines[0].split(",");
        let rowStartIndex = (withHeaders) ? 1 : 0;
        for (let i = 1;i < lines.length;i++){
            let obj = {};
            let currentline = lines[i].split(",");
            for (let j = 0;j < headers.length;j++){
                obj[headers[j]] = currentline[j];
            }
            result.push(obj);
        }
        return JSON.stringify(result);
    }
}
