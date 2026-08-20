const fs = require('fs');

const path = 'd:/Downloads/linkden post/task/Easeui-project/src/pages/components/CardPage.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace the Component Preview section to just use CardDemo from Shadcn
const previewRegex = /<ComponentDemo tabs={tabsDark}>.*?<\/ComponentDemo>/s;
content = content.replace(previewRegex, `<ComponentDemo tabs={NewCardCodes.CardDemoTabs}>
          <div className="w-full max-w-sm mx-auto">
            <CardDemos.CardDemo />
          </div>
        </ComponentDemo>`);

// Remove reactCodeDark, reactCodeLight, reactCodeOutline, htmlCodeDark, htmlCodeLight, htmlCodeOutline, tabsDark, tabsLight, tabsOutline
// Actually, it's easier to just replace everything from `const reactCodeDark` to `const allExamplesCode`
const oldCodeRegex = /const reactCodeDark = [\s\S]*?const allExamplesCode =/s;
content = content.replace(oldCodeRegex, `const allExamplesCode =`);

// Replace Installation section
const oldInstallRegex = /{installTab === "Command".*?<\/section>/s;
content = content.replace(oldInstallRegex, `{installTab === "Command" ? (
          <div className="bg-[#0d1117] text-white p-5 font-mono text-sm border-4 border-black dark:border-zinc-700 rounded-xl flex justify-between items-center relative overflow-hidden group shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-none transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex gap-2">
                <button className="bg-neo-green text-black px-2 py-0.5 rounded font-black border-2 border-black text-xs">
                  npx
                </button>
              </div>
              <span className="text-gray-300 mt-2 sm:mt-0">
                <span className="text-neo-green">pnpm</span> dlx shadcn@latest add card
              </span>
            </div>
            <button
              onClick={() =>
                copyToClipboard(
                  "pnpm dlx shadcn@latest add card",
                  setCopiedInstall,
                )
              }
              className="text-gray-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 p-2 rounded-lg border border-zinc-600 transition-colors ml-4 self-start sm:self-center"
              title="Copy"
            >
              {copiedInstall ? (
                <Check size={16} className="text-neo-green" />
              ) : (
                <Copy size={16} />
              )}
            </button>
          </div>
        ) : (
          <div className="p-4 border-[3px] border-black bg-white dark:bg-zinc-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-black dark:text-white font-bold">
            <p>
              1. Copy the card component code from shadcn UI and paste it
              into{" "}
              <code className="bg-neo-blue text-black px-1 border border-black">
                components/ui/card.tsx
              </code>
            </p>
          </div>
        )}
      </section>`);

// Fix usage section imports
const usageRegex = /<span className="overflow-x-auto">.*?<\/span>/s;
content = content.replace(usageRegex, `<span className="overflow-x-auto">
              <span className="text-neo-pink">import</span> {"{"} Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter {"}"}{" "}
              <span className="text-neo-pink">from</span>{" "}
              <span className="text-neo-yellow">"@/components/ui/card"</span>
            </span>`);

// Update props table (remove it or replace with Shadcn API reference)
const propsSectionRegex = /{propsData\.map.*?<\/tbody>/s;
content = content.replace(propsSectionRegex, `<tbody>
                  <tr className="border-b-[3px] border-black dark:border-zinc-700">
                    <td className="p-4">size</td>
                    <td className="p-4">
                      <code className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-sm text-neo-pink">
                        "default" | "sm"
                      </code>
                    </td>
                    <td className="p-4">"default"</td>
                    <td className="p-4">Size variant of the card.</td>
                  </tr>
                  <tr className="border-b-[3px] border-black dark:border-zinc-700">
                    <td className="p-4">className</td>
                    <td className="p-4">
                      <code className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-sm text-neo-pink">
                        string
                      </code>
                    </td>
                    <td className="p-4">-</td>
                    <td className="p-4">Custom classes for the container.</td>
                  </tr>
                </tbody>`);

// Fix the Component Preview code below props table, replace "Advanced Examples" with "Shadcn UI Examples"
const customSectionRegex = /<h2 className="text-3xl font-comic font-black text-black dark:text-white mb-6">[\s\S]*?<ComponentDemo/s;
content = content.replace(customSectionRegex, `<h2 className="text-3xl font-comic font-black text-black dark:text-white mb-6">
          Shadcn UI Examples
        </h2>
        
        <h3 className="text-2xl font-bold mb-4 mt-8">Small Card</h3>
        <ComponentDemo tabs={NewCardCodes.CardSmallTabs}>
          <CardDemos.CardSmall />
        </ComponentDemo>

        <h3 className="text-2xl font-bold mb-4 mt-8">Card Spacing</h3>
        <ComponentDemo tabs={NewCardCodes.CardSpacingTabs}>
          <CardDemos.CardSpacing />
        </ComponentDemo>

        <h3 className="text-2xl font-bold mb-4 mt-8">Edge to Edge</h3>
        <ComponentDemo tabs={NewCardCodes.CardEdgeToEdgeTabs}>
          <CardDemos.CardEdgeToEdge />
        </ComponentDemo>

        <h3 className="text-2xl font-bold mb-4 mt-8">Card with Image</h3>
        <ComponentDemo tabs={NewCardCodes.CardImageTabs}>
          <CardDemos.CardImage />
        </ComponentDemo>

        <h3 className="text-2xl font-bold mb-4 mt-8">RTL Support</h3>
        <ComponentDemo tabs={NewCardCodes.CardRtlTabs}>
          <CardDemos.CardRtl />
        </ComponentDemo>

        <h2 className="text-3xl font-comic font-black text-black dark:text-white mb-6 mt-16">
          Custom Layouts & Integrations
        </h2>
        <ComponentDemo`);

fs.writeFileSync(path, content);
console.log('Done rewriting CardPage');
