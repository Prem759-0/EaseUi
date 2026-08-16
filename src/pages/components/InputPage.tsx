import { useEffect } from "react";
import gsap from "gsap";
import ComponentDemo from "@/pages/ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import { Input } from "@/components";
import { PasswordInput } from "@/components/Input/PasswordInput";
import {
  AnimatedInput,
  FloatingLabelInput,
  InputWithIcon,
  NumberInput,
} from "@/components/Input";
import { Search } from "lucide-react";

const InputPage = () => {
  useEffect(() => {
    gsap.fromTo(
      ".page-header",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );
    gsap.fromTo(
      ".page-section",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  const reactCodeNormal = `import { Input } from "@/components/Input";

export default function App() {
  return (
    <div className="flex flex-col gap-4">
      <Input label="Full Name" placeholder="Enter your name" size="sm" />
      <Input label="Email" type="email" placeholder="Enter your email" size="md" />
      <Input label="Email" type="email" placeholder="Enter your email" size="lg" />
    </div>
  )
}`;

  const htmlCodeNormal = `<!-- Tailwind CSS HTML equivalent -->
<div class="flex flex-col gap-4 w-full max-w-sm">
  <div class="flex flex-col gap-1">
    <label class="font-bold text-sm">Full Name</label>
    <input class="border-[3px] border-black p-2 text-sm focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all" placeholder="Enter your name" />
  </div>
  <div class="flex flex-col gap-1">
    <label class="font-bold text-base">Email</label>
    <input type="email" class="border-[3px] border-black p-3 text-base focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all" placeholder="Enter your email" />
  </div>
</div>`;

  const tabsNormal = [
    { name: "React", language: "tsx", code: reactCodeNormal },
    { name: "HTML", language: "html", code: htmlCodeNormal }
  ];

  const reactCodeAdvanced = `import { AnimatedInput, FloatingLabelInput, InputWithIcon, PasswordInput, NumberInput } from "@/components/Input";
import { Search } from "lucide-react";

export default function App() {
  return (
    <div className="flex flex-col gap-4">
      <AnimatedInput label="Animated" placeholder="Focus me" />
      <FloatingLabelInput label="Floating" placeholder="" />
      <InputWithIcon label="Search" icon={<Search />} />
      <PasswordInput label="Password" />
      <NumberInput label="Age" />
    </div>
  )
}`;

  const htmlCodeAdvanced = `<!-- Basic Tailwind representations for advanced inputs -->
<div class="flex flex-col gap-4 w-full max-w-sm">
  <div class="relative">
    <input type="password" class="w-full border-[3px] border-black p-3 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all pr-10" placeholder="Password" />
    <button class="absolute right-3 top-1/2 -translate-y-1/2 font-bold">👁</button>
  </div>
</div>`;

  const tabsAdvanced = [
    { name: "React", language: "tsx", code: reactCodeAdvanced },
    { name: "HTML", language: "html", code: htmlCodeAdvanced }
  ];

  const propsData = [
    {
      prop: "placeholder",
      type: "string",
      default: "undefined",
      description: "Placeholder text inside the input",
    },
    {
      prop: "type",
      type: "string",
      default: '"text"',
      description: "Input type (text, password, email, etc.)",
    },
    {
      prop: "value",
      type: "string",
      default: "undefined",
      description: "Value of the input",
    },
    {
      prop: "onChange",
      type: "(e: React.ChangeEvent<HTMLInputElement>) => void",
      default: "undefined",
      description: "Change event handler",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20">
      <header className="page-header space-y-4 mb-10 border-b-[4px] border-black dark:border-white pb-8 opacity-0">
        <h1 className="text-5xl font-comic font-black uppercase tracking-widest text-black dark:text-white inline-block relative">
          Input
          <span className="absolute -bottom-2 left-0 w-full h-2 bg-neo-pink"></span>
        </h1>
        <p className="text-xl font-bold text-gray-700 dark:text-gray-300 mt-6 border-l-[4px] border-neo-blue pl-4">
          Input component for user forms with standard styling and easy customization.
        </p>
      </header>

      <section className="page-section space-y-6 opacity-0">
        <h2 className="text-3xl font-comic font-black uppercase text-black dark:text-white bg-neo-blue inline-block px-3 py-1 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Examples</h2>
        
        <div className="space-y-4 mt-8">
          <h3 className="text-2xl font-comic font-bold text-black dark:text-white border-b-[3px] border-black pb-2 inline-block">Normal Inputs</h3>
          <ComponentDemo tabs={tabsNormal}>
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <Input
                label="Full Name"
                placeholder="Enter your name"
                size="sm"
              />
              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                size="md"
              />
              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                size="lg"
              />
            </div>
          </ComponentDemo>
        </div>

        <div className="space-y-4 mt-12">
          <h3 className="text-2xl font-comic font-bold text-black dark:text-white border-b-[3px] border-black pb-2 inline-block">Advanced Types</h3>
          <ComponentDemo tabs={tabsAdvanced}>
            <div className="flex flex-col gap-6 w-full max-w-sm">
              <AnimatedInput label="Animated" placeholder="Focus me" />
              <FloatingLabelInput label="Floating" placeholder="" />
              <InputWithIcon label="Search" icon={<Search />} />
              <PasswordInput label="Password" />
              <NumberInput label="Age" onChange={(v) => console.log(v)} />
            </div>
          </ComponentDemo>
        </div>
      </section>

      <section className="page-section space-y-6 opacity-0">
        <h2 className="text-3xl font-comic font-black uppercase text-black dark:text-white bg-neo-green inline-block px-3 py-1 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default InputPage;
