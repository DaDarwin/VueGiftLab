export class Gift{

    constructor(data){
        this.id = data._id,
        this.url = data.url,
        this.opened = data.opened,
        this.tag = data.tag
    }
}


