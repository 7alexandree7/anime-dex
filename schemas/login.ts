import { z } from "zod";

export const loginSchema = z.object({
    email: z.email("Email inválido").max(255, "Email é muito grande"),
    password: z.string().min(1, "Senha é obrigatória").max(255, "Senha é muito grande"),
})

export type LoginFormData = z.infer<typeof loginSchema>