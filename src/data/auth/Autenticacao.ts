import auth from "@/config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default class Autenticacao {
  
    static async cadastrar(email: string, senha: string): Promise<any> {
    await createUserWithEmailAndPassword(auth, email, senha)
  }
  
}
