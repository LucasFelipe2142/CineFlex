let assentos =[];
export default function guardar(num, retirar){
    if(!retirar){
        assentos.push(num);
        return assentos;
    } else{
        let cadeiras = assentos.filter(item => item === num)
        return cadeiras
    }
}