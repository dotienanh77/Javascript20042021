// 15 fillter
// Ví dụ:
//Phương thức filter () tạo một mảng chứa đầy tất cả các phần tử của mảng vượt qua một bài kiểm tra 
//được cung cấp dưới dạng một hàm).
// Cho một mảng các số, trả về một mảng mới chỉ có các số từ 5 trở lên
// var arr_name = ["teo", "ti", "hoa", "tuan"]
// const newarr = arr_name.filter(function(name){
//     if (name.length<=3){
//         return true;
//     }
//     return false ; // k đưa phần tử nào vào 
    
// })
// console.log(newarr)


// vis dụ:
// yêu cầu in ra mảng person dứoi 25 tuổi
//[tèo, tuán, hoa]
// const arrPerson =[
//         {id:1, name: 'tèo', age: 20},
//         {id:2, name: 'tủn', age: 25},
//         {id:3, name: 'hoa', age: 22},
//         {id:4, name: 'tuấn', age: 21},
//         {id:5, name: 'lan', age: 26},
// ]


// const filterarrperson = arrPerson.filter(function(person){
//         if (person.age<25){
//             return true;
//         }
//         return false ; // k đưa phần tử nào vào 
        
//     }).map(function(object){
//         return object.name
//     })
//     console.log(filterarrperson)
// var ages = [32, 33, 16, 40];

// function checkAdult(age) {
//   return age >= 18;
// }

// 16 hàm reduce (gộp (+_*/))
const arrNums = [1, 2, 3, 4, 5]
// reduce có hai tham số, muốn trả về kiểu dữ liệu gì thì khai báo tham số thứ 2 (thuộc kiểu dữ liệu trả về)
const newArrNums = arrNums.reduce(function(accumulator, currentValue){
    return accumulator + currentValue
//         lần 1: 
//  accumulator : 0 (value) - biến tích luỹ
//    currentValue: 1 (value)
// return 5
// lần 2: 
// accumulator : 5 (value)
// currentValue: 2 (value)
// return 7
},0)
console.log(newArrNums)