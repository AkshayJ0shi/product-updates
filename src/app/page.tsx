import { ProductUpdatesTable } from "@/components/product-updates-table";
import { productUpdates } from "@/lib/data";
import { Info } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
        <div className="">
        <p className="text-sm text-blue-900">
          Why so many features for MVP?
        </p>
        <p className="text-sm text-blue-900">Asking the user to download an application which can interact with the file system & native binaries is a serious ask as opposed to visiting a web page. Initial impression matters a lot here.
        </p>
        </div>
      </div>
      <ProductUpdatesTable data={productUpdates} />
    </div>
  );
}
