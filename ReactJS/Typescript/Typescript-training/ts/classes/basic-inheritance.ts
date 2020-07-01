// class Course {
//     id: number;
//     name: string;
//     price: number;
//     constructor(id:number, name:string, price:number) {
//         this.id = id;
//         this.name = name;
//         this.price = price;
//     }

//     // Phải gọi this trong class kế thừa
//     // getCourceInfo = ():string => {
//     //     return `id: ${this.id}, name: ${this.name}, price: ${this.price}`;
//     // }

//     // Phải là function bình thường mới có thể kế thừa.
//     getCourceInfo () {
//         return `id: ${this.id}, name: ${this.name}, price: ${this.price}`;
//     }
// }

// class CourseDetail extends Course{
//     author: string;
//     constructor(id:number, name:string, price:number, author: string) {
//         super(id, name, price);
//         this.author = author;
//     }

//     getCourseDetail = () => {
//         let courseInfo:string = this.getCourceInfo();
//         return `${courseInfo} author: ${this.author}`;
//     }
// }

// let courseIntance = new Course(1, 'ReactJS', 20000);
// console.log('courseIntance: ', courseIntance.getCourceInfo());

// let courseDetail = new CourseDetail(2, 'Typescript', 3000, 'Quoc');
// console.log('courseDetail: ', courseDetail.getCourseDetail());