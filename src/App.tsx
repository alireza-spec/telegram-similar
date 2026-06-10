import AuthPage from "./pages/AuthPage";
import TelegramPage from "./pages/TelegramPage";
import { useAuth } from "./hooks/useAuth";

export default function App({ missingConvexUrl }: { missingConvexUrl?: boolean }) {
  const { user, loading } = useAuth();

  if (missingConvexUrl) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 text-white">
        <div className="max-w-xl rounded-3xl bg-slate-900/90 p-8 border border-white/10 shadow-glow">
          <h1 className="text-2xl font-bold mb-3">VITE_CONVEX_URL تنظیم نشده</h1>
          <p className="text-slate-300 leading-8">فایل <code className="ltr inline-block bg-slate-800 px-2 py-1 rounded">.env.local</code> بساز و مقدار Convex را داخلش قرار بده. نمونه داخل <code className="ltr inline-block bg-slate-800 px-2 py-1 rounded">.env.example</code> هست.</p>
        </div>
      </div>
    );
  }

  if (loading) return <div className="h-screen grid place-items-center text-white">در حال بارگذاری...</div>;
  return user ? <TelegramPage /> : <AuthPage />;
}
