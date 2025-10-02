import type React from "react"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { useState } from "react"
import { Eye, EyeClosed } from "lucide-react"

const Login: React.FC = () => {

    const [isVisible, setIsVisible] = useState(false)

    return (
        <div className="h-screen w-screen bg-slate-950 relative overflow-hidden">
            <div className="w-[450px] h-[250px] rounded-full bg-pink-900 absolute top-10 left-10 blur-3xl inset-0" />
            <div className="w-[250px] h-[250px] rounded-full bg-pink-950 absolute bottom-10 right-10 blur-3xl " />
            <div className="w-1/2 h-1/2 absolute top-1/2 left-1/2  -translate-x-1/2 *-translate-y-1/2 z-40 flex items-center justify-center">
                <form className="w-full h-full">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="email" className="text-slate-100">Email:</Label>
                        <Input type="email" id="email" name="email" required placeholder="E-mail..." />
                    </div>
                    <div className="flex flex-col gap-2 ">
                        <Label htmlFor="password" className="text-slate-100">Password:</Label>
                        <div>
                        <Input type="text" id="password" name="password" required placeholder="Password..." />
        <Eye />
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login