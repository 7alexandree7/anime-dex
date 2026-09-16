import { z } from "zod";

export const RegisterSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório").max(80, "Nome é muito grande"),
    email: z.email("Email inválido").max(255, "Email é muito grande"),
    password: z.string().min(6, "A senha precisa ter pelo menos 6 caracteres").max(255, "Senha é muito grande"),
    confirmPassword: z.string().min(6, "A senha precisa ter pelo menos 6 caracteres").max(255, "Senha é muito grande"),
})
    .refine(data => data.password === data.confirmPassword, {
        message: "As senhas precisam ser iguais",
        path: ["confirmPassword"],
    })


export type RegisterFormData = z.infer<typeof RegisterSchema>;