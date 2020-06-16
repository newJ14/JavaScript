const fs = require('fs');
const crypto = require('crypto');

class UsersRepository {
    constructor(filename){ //async not allowed (natural)
        if (!filename){
            throw new Error('Creating a repository requires a filename');
        }

        this.filename = filename;

        try{
            fs.accessSync(this.filename);
        } catch(err){
            fs.writeFileSync(this.filename, '[]');
        }
    }

    async getAll() {
        //Open the file called this.filename 
        return JSON.parse(await fs.promises.readFile(this.filename, {encoding:'utf8'}))
    }

    async create(attrs){
        attrs.id = this.randomId();
        
        const records = await this.getAll();
        records.push(attrs);
        //write the updagted 'records' array back to this.filename
        await this.writeAll(records);
    }

    async writeAll(records){
        await fs.promises.writeFile(this.filename, JSON.stringify(records, null, 2));
        //second argument: custom formatter, third argument: level of indentation 
    }

    randomId() {
        return crypto.randomBytes(4).toString('hex');
    }

    async getOne(id){
        const records = await this.getAll();
        return records.find(record => record.id === id);
    }

    async delete(id){
        const records = await this.getAll();
        const filteredRecords = records.filter(record => record.id !== id);
        await this.writeAll(filteredRecords);
    }

    async update(id, attrs){
        const records = await this.getAll();
        const record = records.find(record => record.id === id);

        if(!record) {
            throw new Error(`Record with id ${id} not found `)
        }
        // record === {email: 'test@test.com'}
        // attrs === {password: 'password'}
        Object.assign(record, attrs);
        await this.writeAll(records);
    }
}

// Node does not support top level await statement. New versoion does
const test = async() => {
    const repo = new UsersRepository('users.json');
    
    await repo.update('iut', {password: 'mypassword'});
};

test();