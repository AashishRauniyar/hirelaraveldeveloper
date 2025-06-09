import { Check, ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LaravelBenefits() {
  const benefits = [
    "Clean, Documented & Maintainable Code",
    "Adherence to SOLID Principles & Best Practices",
    "Robust Security Measures (OWASP Top 10)",
    "Scalable Architecture for Future Growth",
    "Comprehensive Unit & Feature Testing",
    "Transparent Communication & Reporting",
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-md text-sm font-medium">
              Our Commitment to Quality
            </div>
            <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900">Code You Can Rely On</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              When you hire a developer from us, you're investing in reliability. Our engineers produce clean, secure,
              and maintainable code that adheres to the highest industry standards.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="pt-6">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium"
              >
                Discuss Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="bg-gray-800 rounded-lg p-6 shadow-xl text-sm font-mono relative overflow-hidden">
              <div className="flex items-center space-x-1.5 mb-4">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="text-gray-400 text-xs ml-2">UserController.php</span>
              </div>
              <pre className="text-gray-300 whitespace-pre-wrap">
                <code className="language-php">
                  <span className="text-purple-400">{"<?php"}</span>
                  <br />
                  <span className="text-sky-400">namespace</span> App\Http\Controllers;
                  <br />
                  <br />
                  <span className="text-sky-400">use</span> Illuminate\Http\Request;
                  <br />
                  <span className="text-sky-400">use</span> App\Models\User;
                  <br />
                  <span className="text-sky-400">use</span> Illuminate\Support\Facades\Hash;
                  <br />
                  <br />
                  <span className="text-sky-400">class</span> <span className="text-green-400">UserController</span>{" "}
                  <span className="text-sky-400">extends</span> <span className="text-green-400">Controller</span>
                  <br />
                  {"{"}
                  <br />
                  {"  "}
                  <span className="text-sky-400">public function</span> <span className="text-yellow-300">store</span>
                  (Request <span className="text-purple-400">$request</span>)
                  <br />
                  {"  {"}
                  <br />
                  {"    "}
                  <span className="text-purple-400">$user</span> = User::<span className="text-yellow-300">create</span>
                  ([
                  <br />
                  {"      "}
                  <span className="text-orange-400">"email"</span> {"=>"}{" "}
                  <span className="text-purple-400">$request</span>
                  <span className="text-gray-300">{"->"}</span>
                  <span className="text-yellow-300">validate</span>([<span className="text-orange-400">"email"</span>{" "}
                  {"=>"} <span className="text-orange-400">"required|email|unique:users"</span>]),
                  <br />
                  {"      "}
                  <span className="text-orange-400">"password"</span> {"=>"} Hash::
                  <span className="text-yellow-300">make</span>(<span className="text-purple-400">$request</span>
                  <span className="text-gray-300">{"->"}</span>
                  <span className="text-yellow-300">validate</span>([<span className="text-orange-400">"password"</span>{" "}
                  {"=>"} <span className="text-orange-400">"required|min:8"</span>])),
                  <br />
                  {"    "}
                  ]);
                  <br />
                  <br />
                  {"    "}
                  <span className="text-sky-400">return</span> response()<span className="text-gray-300">{"->"}</span>
                  <span className="text-yellow-300">json</span>([
                  <br />
                  {"      "}
                  <span className="text-orange-400">"message"</span> {"=>"}{" "}
                  <span className="text-orange-400">"User created successfully"</span>,
                  <br />
                  {"      "}
                  <span className="text-orange-400">"user"</span> {"=>"} <span className="text-purple-400">$user</span>,
                  <br />
                  {"    "}
                  ]);
                  <br />
                  {"  }"}
                  <br />
                  {"}"}
                </code>
              </pre>
              <div className="absolute bottom-4 right-4 flex space-x-3">
                <div className="bg-gray-700/70 text-white text-xs px-3 py-1.5 rounded-md">Secure</div>
                <div className="bg-gray-700/70 text-white text-xs px-3 py-1.5 rounded-md flex items-center">
                  <Zap size={14} className="mr-1 text-yellow-400" /> Efficient
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
