// interface FormProps {
//
// }

import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import GdprInput from "@/components/ui/inputs/gdprInput";
import Input from "@/components/ui/inputs/Input";

export default function Form() {
    return (
        <form className="flex flex-col gap-md md:gap-6xl">
            <p className="text-body mb-4xl md:mb-0">
                Fyll i dina uppgifter så hör vi av oss när något nytt är på gång.
            </p>
            <div className="flex flex-col md:gap-xl text-lead">
                <Input label="Namn" name="name" />
                <Input label="E-post" name="email" type="email" />
            </div>

            <div className="flex flex-col gap-md">
                <GdprInput />
                <PrimaryButton type="submit" label="Skicka" />
            </div>
        </form>
    );
}
