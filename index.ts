// function soma(a: number, b: number){
//     return a+b;
// }
// console.log(soma(1,2));

// interface IAnimal{
//     nome: string;
//     tipo: 'terrestre'|'aquatico';
//     domestico: boolean;
// }

// interface IFelino extends IAnimal{
//     visaoNoturna: boolean;
// }

// interface ICanino extends IAnimal{
//     porte: 'pequeno'|'medio'|'grande'; 
// }   
// type IDomestico=IFelino|ICanino;

// const animal: IDomestico={
//     domestico:true,
//     nome:'Cachorro',
//     porte:'medio',
//     tipo:'terrestre'
// }


// const input = document.getElementById('input') as HTMLInputElement;

// input.addEventListener('input',(event) =>{
//     const i= event.currentTarget as HTMLInputElement;
//     console.log(i.value);
// });

//generics types

// function adicionaApendiceALista<T>(array : any[],value:T){
//     return array.map(item => item+value);
// }

// adicionaApendiceALista(['1','2','3'],'1');

// interface IUsuario{
//     id:string;
//     email:string;
//     cargo?: 'funcionario'|'gerente'|'coordenador'|'supervisor';
// }


// function redireciona(usuario: IUsuario){
//     if(usuario.cargo){
//         //redirecionar para area do cargo
//     }
//     //area do usuario
// }


// interface Cachorro {
//     nome: string;
//     idade: number;
//     parqueFav?: string;
// }



// class meuCachorro implements Cachorro{
//     idade;
//     nome;
//     constructor(nome,idade){
//         this.nome=nome;
//         this.idade=idade;

//     }
// }

// const cao = new meuCachorro('Apolo', 14);


interface Estudante {
    name:string;
    idade:number;
}
interface Estudante{
    serie:string;~
}