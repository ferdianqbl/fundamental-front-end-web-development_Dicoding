// should to inherit from HTMLElement
class MyElement extends HTMLElement {}

/*
    Dalam penamaan tag untuk custom element, nama tag harus terdiri dari dua kata yang dipisahkan oleh dash (-). Jika tidak, pembuatan custom element tidak akan berhasil. Hal Ini diperlukan untuk memberi tahu browser perbedaan antara elemen asli HTML dan custom element
 */
customElements.define("my-element", MyElement);
