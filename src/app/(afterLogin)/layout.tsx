import {ReactNode} from "react";

export default function AfterLoginLayout({children}:{children:ReactNode} ) {
    return (
        <div>
        <div>애프터 로그인 레이아웃</div>
    {children}
        </div>
    )
}