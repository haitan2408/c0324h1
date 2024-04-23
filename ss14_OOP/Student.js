// Cách 1
// function Student(code, name, address) {
//     this.code = code;
//     this.name = name;
//     this.address = address;
// }

// let quyen = new Student(14, "Phan Văn Quyền", "Huế");

// let baoNgoc = new Student(6, "Hán Bảo Ngọc", "Hà Nội");

// Cách 2
class Person {
    constructor(code, name, address) {
        this.code = code;
        this.name = name;
        this.address = address;
    }

    an() {
        alert("Ăn")
    }
    
}
class Student extends Person {
    constructor(code, name, address, point) {
        super(code, name, address);
        this.point = point;
    }

    // Phương thức/method
    diHoc() {
        alert(this.name + " đi học")
    }
}

// Hàm/function

let quyen = new Student(14, "Phan Văn Quyền", "Huế", 9);
quyen.diHoc();
quyen.name;
quyen.point;
quyen.an();

let baoNgoc = new Student(6, "Hán Bảo Ngọc", "Hà Nội");
baoNgoc.diHoc();
