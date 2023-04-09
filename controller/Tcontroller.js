const fs = require('fs')

module.exports = {
    getTeacher: (req, res) => {
        fs.readFile('../LatRestAPI/data/teachers.json', (err, data) => {
            if (err) {
                console.log(err);
                return
            }

            const raw = data.toString('utf8')
            const teachers = JSON.parse(raw)

            res.status(200).json({
                message: 'Data taken',
                data: teachers
            })
        })
    }
}