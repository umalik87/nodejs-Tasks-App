require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5d9f8a4734dd1508047623ec').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false})
    return count
}

deleteTaskAndCount('5d9fbaa3c4567f22e04d1648').then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})