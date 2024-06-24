import { geminiContentScript } from "@/components/geminiContentScript";

export default defineContentScript({
	matches: ["*://gemini.google.com/app*"],
	main() {
		geminiContentScript(document);
	},
});
