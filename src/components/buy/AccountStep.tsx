import { Camera, Sparkles } from "lucide-react";
import type { Account } from "./types";

export function AccountStep({
  account,
  onChange,
  onNext,
}: {
  account: Account;
  onChange: (a: Account) => void;
  onNext: () => void;
}) {
  const valid =
    account.fullName.trim() &&
    account.email.includes("@") &&
    account.phone.trim().length >= 6 &&
    account.password.length >= 6 &&
    account.password === account.confirm;

  const set = (k: keyof Account) => (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange({ ...account, [k]: e.target.value });

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
      {/* Left visual */}
      <div className="hidden lg:flex relative h-[560px] rounded-3xl border border-border bg-gradient-to-br from-lemon/10 via-card to-background p-10 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-lemon/20 blur-3xl" />
        <div className="absolute bottom-10 -left-10 h-48 w-48 rounded-full bg-orange-impact/20 blur-3xl" />
        <div className="relative z-10 flex flex-col justify-between w-full">
          <div className="inline-flex w-fit items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.2em] text-lemon">
            <Sparkles className="h-3 w-3" /> Welcome
          </div>
          <div>
            <h3 className="font-display text-4xl font-black leading-tight">
              Capture moments. <br />
              <span className="text-lemon">Create impact.</span>
            </h3>
            <p className="mt-3 text-muted-foreground text-sm max-w-xs">
              Run more than a booth. Run the entire experience.
            </p>
          </div>
          <div className="rounded-2xl glass p-5 max-w-xs">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-lemon text-primary-foreground">
                <Camera className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold">CAP*TURES Pro</div>
                <div className="text-xs text-muted-foreground">License preview</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="rounded-3xl border border-border bg-card/40 p-8 sm:p-10">
        <h2 className="font-display text-3xl font-black">Create your account</h2>
        <p className="mt-2 text-sm text-muted-foreground">Start building your event experience.</p>

        <div className="mt-8 grid gap-4">
          <Field label="Full name" value={account.fullName} onChange={set("fullName")} placeholder="Jane Doe" />
          <Field label="Company name" value={account.company} onChange={set("company")} placeholder="Studio Co." />
          <Field label="Email" type="email" value={account.email} onChange={set("email")} placeholder="you@studio.com" />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Password" type="password" value={account.password} onChange={set("password")} placeholder="••••••••" />
            <Field label="Confirm password" type="password" value={account.confirm} onChange={set("confirm")} placeholder="••••••••" />
          </div>
          <Field label="Phone" type="tel" value={account.phone} onChange={set("phone")} placeholder="+66 ..." required />
        </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-3">
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Sign in instead
          </button>
          <button
            disabled={!valid}
            onClick={onNext}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-lemon px-8 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-40 disabled:hover:scale-100"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      <input
        {...props}
        className="mt-1.5 w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-colors focus:border-lemon focus:bg-background"
      />
    </label>
  );
}
