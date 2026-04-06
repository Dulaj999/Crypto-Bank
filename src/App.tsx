import { useState } from 'react';
import { 
  Home, 
  Wallet, 
  PieChart, 
  User, 
  Bell, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownLeft, 
  ArrowRightLeft,
  Shield,
  ChevronRight,
  Lock,
  Info,
  Menu,
  Star,
  Phone,
  BookOpen,
  FileText,
  History,
  ShieldCheck,
  Zap,
  Cpu,
  Activity,
  Terminal,
  Search,
  Copy,
  LogOut,
  PlusCircle,
  ExternalLink,
  Coins,
  Bitcoin
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
type Screen = 'home' | 'earn' | 'wallet' | 'profile' | 'support' | 'vault-details' | 'deposit' | 'referral' | 'agents' | 'agent-status' | 'integrity';

// --- Components ---

const MarketTicker = () => (
  <div className="w-full bg-surface-container-low py-2 overflow-hidden whitespace-nowrap z-[60] relative">
    <div className="flex space-x-12 animate-marquee items-center opacity-80 px-6">
      {[...Array(2)].map((_, i) => (
        <div key={i} className="flex space-x-12 items-center">
          <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant flex items-center gap-2">
            BTC <span className="text-primary">$64,231.40</span> <span className="text-green-500">+2.4%</span>
          </span>
          <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant flex items-center gap-2">
            ETH <span className="text-primary">$3,412.12</span> <span className="text-green-500">+1.8%</span>
          </span>
          <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant flex items-center gap-2">
            SOL <span className="text-primary">$142.05</span> <span className="text-red-500">-0.5%</span>
          </span>
          <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant flex items-center gap-2">
            BNB <span className="text-primary">$589.30</span> <span className="text-green-500">+0.2%</span>
          </span>
        </div>
      ))}
    </div>
  </div>
);

const TopAppBar = ({ title, onProfileClick }: { title: string, onProfileClick: () => void }) => (
  <header className="bg-surface fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 border-b border-outline-variant/5">
    <div className="flex items-center gap-4">
      <div 
        className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant/20 cursor-pointer"
        onClick={onProfileClick}
      >
        <img 
          alt="Profile" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW2qSEKxx86T4CSVb4FnMQedKUBFaGDPb78C_psAuxwgJsOz_Npjf1dCyaP98cPLo0qARJt2zuySHNpw-YQKwUYWivlgJJCI7NzgscLrU285L6uBVc5ms7V0vnGQvZYiWJODnfMMT3bx1V9VDE8lxqKZe4JWvlP5lOcZuisoQ0UL3K6vL1y0HAx9h_BJpVl0SS1vzIMjDwNJFmVnPf-mrSkRi68109sO5BAqDFv4-Ci7IYeu1eMRKV6b5ACcASqyZ0Jvr9-fR0h4du" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-xl font-headline font-bold tracking-tighter text-primary-container uppercase">{title}</h1>
    </div>
    <div className="flex items-center gap-3">
      <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors active:scale-95">
        <Bell className="w-5 h-5 text-primary-container" />
      </button>
    </div>
  </header>
);

const BottomNavBar = ({ currentScreen, setScreen }: { currentScreen: Screen, setScreen: (s: Screen) => void }) => (
  <nav className="fixed bottom-0 left-0 w-full z-50 bg-surface-container-highest/40 backdrop-blur-xl rounded-t-3xl flex justify-around items-center px-4 pb-8 pt-4 shadow-[0_-4px_20px_rgba(212,175,55,0.06)]">
    <button 
      onClick={() => setScreen('home')}
      className={`flex flex-col items-center justify-center transition-all duration-300 ${currentScreen === 'home' ? 'text-primary drop-shadow-[0_0_8px_rgba(242,202,80,0.4)]' : 'text-on-surface-variant/40 hover:text-primary/80'}`}
    >
      <Home className="w-6 h-6 mb-1" />
      <span className="text-[10px] font-medium tracking-wide">Home</span>
    </button>
    <button 
      onClick={() => setScreen('earn')}
      className={`flex flex-col items-center justify-center transition-all duration-300 ${currentScreen === 'earn' ? 'text-primary drop-shadow-[0_0_8px_rgba(242,202,80,0.4)]' : 'text-on-surface-variant/40 hover:text-primary/80'}`}
    >
      <TrendingUp className="w-6 h-6 mb-1" />
      <span className="text-[10px] font-medium tracking-wide">Earn</span>
    </button>
    <button 
      onClick={() => setScreen('wallet')}
      className={`flex flex-col items-center justify-center transition-all duration-300 ${currentScreen === 'wallet' ? 'text-primary drop-shadow-[0_0_8px_rgba(242,202,80,0.4)]' : 'text-on-surface-variant/40 hover:text-primary/80'}`}
    >
      <Wallet className="w-6 h-6 mb-1" />
      <span className="text-[10px] font-medium tracking-wide">Wallet</span>
    </button>
    <button 
      onClick={() => setScreen('profile')}
      className={`flex flex-col items-center justify-center transition-all duration-300 ${currentScreen === 'profile' ? 'text-primary drop-shadow-[0_0_8px_rgba(242,202,80,0.4)]' : 'text-on-surface-variant/40 hover:text-primary/80'}`}
    >
      <User className="w-6 h-6 mb-1" />
      <span className="text-[10px] font-medium tracking-wide">Profile</span>
    </button>
  </nav>
);

// --- Screens ---

const DashboardScreen = ({ setScreen }: { setScreen: (s: Screen) => void }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="space-y-12"
  >
    <section className="mt-8 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
      <div className="w-full md:w-auto">
        <p className="text-on-surface-variant text-sm tracking-[0.2em] uppercase mb-2">Private Vault Balance</p>
        <div className="flex items-baseline gap-4">
          <h2 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tight gold-text-gradient">$2,842,091.54</h2>
          <button className="text-on-surface-variant hover:text-primary transition-colors">
            <Info className="w-6 h-6" />
          </button>
        </div>
        <div className="flex items-center gap-2 mt-4 text-green-500">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-medium">+$14,203.44 (24h)</span>
        </div>
      </div>
      <div className="flex gap-4 w-full md:w-auto">
        <button 
          onClick={() => setScreen('wallet')}
          className="flex-1 md:flex-none gold-gradient text-on-primary px-8 py-4 rounded-full font-headline font-bold text-sm tracking-wide shadow-lg shadow-primary/20 active:scale-95 transition-transform"
        >
          Transfer
        </button>
        <button className="flex-1 md:flex-none border border-outline-variant/30 text-on-surface px-8 py-4 rounded-full font-headline font-bold text-sm tracking-wide hover:bg-surface-bright/10 active:scale-95 transition-transform">
          Exchange
        </button>
      </div>
    </section>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1 glass-card p-8 rounded-3xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Activity className="w-16 h-16" />
        </div>
        <p className="text-on-surface-variant text-xs uppercase tracking-widest mb-6">Daily Profit</p>
        <h3 className="text-3xl font-headline font-bold text-on-surface mb-2">+$12,450.00</h3>
        <p className="text-green-500 text-sm font-medium">+8.2% vs yesterday</p>
        <div className="mt-8 h-16 w-full flex items-end gap-1">
          {[0.5, 0.7, 0.5, 0.8, 1, 0.9, 1].map((h, i) => (
            <div key={i} className="w-full bg-primary/20 rounded-t-sm" style={{ height: `${h * 100}%`, opacity: 0.2 + h * 0.8 }} />
          ))}
        </div>
      </div>

      <div className="md:col-span-2 bg-surface-container-low p-8 rounded-3xl relative overflow-hidden flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <p className="text-on-surface-variant text-xs uppercase tracking-widest mb-6">Portfolio Allocation</p>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium">Bitcoin</span>
              </div>
              <span className="text-sm text-on-surface-variant">62%</span>
            </div>
            <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
              <div className="bg-primary h-full" style={{ width: '62%' }} />
            </div>
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="text-sm font-medium">Ethereum</span>
              </div>
              <span className="text-sm text-on-surface-variant">28%</span>
            </div>
            <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
              <div className="bg-blue-400 h-full" style={{ width: '28%' }} />
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center relative">
          <div className="w-40 h-40 rounded-full border-[12px] border-primary/10 flex items-center justify-center">
            <div className="text-center">
              <span className="block text-xs text-on-surface-variant uppercase tracking-tighter font-bold">Yield</span>
              <span className="block text-2xl font-headline font-extrabold text-primary">12.4%</span>
            </div>
          </div>
          <div className="absolute inset-0 bg-primary/5 blur-[40px] rounded-full" />
        </div>
      </div>
    </div>

    <section className="mt-16">
      <div className="flex items-center justify-between mb-8">
        <h4 className="text-2xl font-headline font-bold">Recent Transactions</h4>
        <button className="text-on-surface-variant text-sm font-medium hover:text-primary transition-colors">View All Archive</button>
      </div>
      <div className="space-y-4">
        {[
          { title: 'Incoming Transfer', sub: 'From: Private Ledger Wallet • 0x82...3f1', amount: '+1.42 BTC', time: 'Today, 10:24 AM', icon: ArrowDownLeft, color: 'text-green-500' },
          { title: 'Asset Swap', sub: 'Exchanged ETH for SOL • Fee: $4.12', amount: '-12.50 ETH', time: 'Yesterday, 04:12 PM', icon: ArrowRightLeft, color: 'text-on-surface' },
          { title: 'External Withdrawal', sub: 'To: Coinbase Custody • Verified', amount: '-0.45 BTC', time: 'Oct 24, 2023', icon: ArrowUpRight, color: 'text-red-500' },
        ].map((tx, i) => (
          <div key={i} className="group flex items-center gap-4 p-4 hover:bg-surface-container-low rounded-xl transition-all cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <tx.icon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <p className="text-on-surface font-headline font-bold">{tx.title}</p>
              <p className="text-on-surface-variant text-xs font-medium">{tx.sub}</p>
            </div>
            <div className="text-right">
              <p className={`font-headline font-bold ${tx.color}`}>{tx.amount}</p>
              <p className="text-on-surface-variant text-xs">{tx.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </motion.div>
);

const EarnScreen = ({ setScreen }: { setScreen: (s: Screen) => void }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="space-y-12"
  >
    <section className="mt-8">
      <h2 className="text-4xl font-headline font-extrabold mb-2">Vault Strategies</h2>
      <p className="text-on-surface-variant max-w-xl">Institutional-grade yield optimization across multiple chains. Secured by multi-sig and real-time auditing.</p>
    </section>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        { name: 'Alpha Growth Vault', apy: '18.4%', risk: 'Medium', assets: 'BTC, ETH, SOL', icon: Zap, color: 'from-primary/20 to-primary/5' },
        { name: 'Stable Yield Reserve', apy: '8.2%', risk: 'Low', assets: 'USDC, USDT, DAI', icon: ShieldCheck, color: 'from-blue-500/20 to-blue-500/5' },
        { name: 'DeFi Aggregator', apy: '24.1%', risk: 'High', assets: 'LDO, AAVE, UNI', icon: Cpu, color: 'from-purple-500/20 to-purple-500/5' },
        { name: 'Liquid Staking Plus', apy: '12.5%', risk: 'Low', assets: 'stETH, rETH, cbETH', icon: Activity, color: 'from-green-500/20 to-green-500/5' },
      ].map((vault, i) => (
        <div 
          key={i} 
          onClick={() => setScreen('vault-details')}
          className={`glass-card p-8 rounded-3xl cursor-pointer group hover:border-primary/40 transition-all relative overflow-hidden bg-gradient-to-br ${vault.color}`}
        >
          <div className="flex justify-between items-start mb-8">
            <div className="w-14 h-14 rounded-2xl bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <vault.icon className="w-8 h-8" />
            </div>
            <div className="text-right">
              <span className="block text-xs text-on-surface-variant uppercase tracking-widest mb-1">Current APY</span>
              <span className="text-3xl font-headline font-extrabold text-primary">{vault.apy}</span>
            </div>
          </div>
          <h3 className="text-2xl font-headline font-bold mb-2">{vault.name}</h3>
          <p className="text-on-surface-variant text-sm mb-6">Assets: {vault.assets}</p>
          <div className="flex items-center justify-between">
            <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${vault.risk === 'Low' ? 'bg-green-500/10 text-green-500' : vault.risk === 'Medium' ? 'bg-primary/10 text-primary' : 'bg-red-500/10 text-red-500'}`}>
              {vault.risk} Risk
            </span>
            <ArrowUpRight className="w-6 h-6 text-on-surface-variant group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const WalletScreen = ({ setScreen }: { setScreen: (s: Screen) => void }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="space-y-12"
  >
    <section className="mt-8 glass-card p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent">
      <div className="flex justify-between items-start mb-8">
        <div>
          <p className="text-on-surface-variant text-xs uppercase tracking-widest mb-2">Total Wallet Balance</p>
          <h2 className="text-4xl font-headline font-extrabold">$1,241,092.12</h2>
        </div>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all">
            <PlusCircle className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={() => setScreen('deposit')}
          className="gold-gradient text-on-primary py-4 rounded-2xl font-headline font-bold text-sm flex items-center justify-center gap-2"
        >
          <ArrowDownLeft className="w-4 h-4" /> Deposit
        </button>
        <button className="bg-surface-container-highest text-on-surface py-4 rounded-2xl font-headline font-bold text-sm flex items-center justify-center gap-2">
          <ArrowUpRight className="w-4 h-4" /> Withdraw
        </button>
      </div>
    </section>

    <section>
      <h3 className="text-xl font-headline font-bold mb-6">Your Assets</h3>
      <div className="space-y-4">
        {[
          { name: 'Bitcoin', symbol: 'BTC', balance: '12.4201', value: '$797,421.12', change: '+2.4%', icon: Bitcoin, color: 'text-orange-500' },
          { name: 'Ethereum', symbol: 'ETH', balance: '142.50', value: '$486,212.44', change: '+1.8%', icon: Coins, color: 'text-blue-400' },
          { name: 'Solana', symbol: 'SOL', balance: '1,240.00', value: '$176,142.05', change: '-0.5%', icon: Zap, color: 'text-purple-400' },
        ].map((asset, i) => (
          <div key={i} className="glass-card p-6 rounded-2xl flex items-center gap-4 group hover:border-primary/20 transition-all cursor-pointer">
            <div className={`w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center ${asset.color}`}>
              <asset.icon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <p className="text-on-surface font-headline font-bold">{asset.name}</p>
              <p className="text-on-surface-variant text-xs font-medium">{asset.balance} {asset.symbol}</p>
            </div>
            <div className="text-right">
              <p className="text-on-surface font-headline font-bold">{asset.value}</p>
              <p className={`text-xs font-medium ${asset.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{asset.change}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </motion.div>
);

const ProfileScreen = ({ setScreen }: { setScreen: (s: Screen) => void }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    className="space-y-12 pb-12"
  >
    <section className="text-center mt-8">
      <div className="relative inline-block">
        <div className="w-32 h-32 rounded-full bg-surface-container-highest overflow-hidden border-4 border-primary/20 mx-auto mb-6">
          <img 
            alt="Profile" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW2qSEKxx86T4CSVb4FnMQedKUBFaGDPb78C_psAuxwgJsOz_Npjf1dCyaP98cPLo0qARJt2zuySHNpw-YQKwUYWivlgJJCI7NzgscLrU285L6uBVc5ms7V0vnGQvZYiWJODnfMMT3bx1V9VDE8lxqKZe4JWvlP5lOcZuisoQ0UL3K6vL1y0HAx9h_BJpVl0SS1vzIMjDwNJFmVnPf-mrSkRi68109sO5BAqDFv4-Ci7IYeu1eMRKV6b5ACcASqyZ0Jvr9-fR0h4du" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-6 right-0 w-8 h-8 rounded-full gold-gradient flex items-center justify-center text-on-primary border-4 border-surface">
          <Star className="w-4 h-4" />
        </div>
      </div>
      <h2 className="text-3xl font-headline font-extrabold mb-1">Alex Sterling</h2>
      <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">Elite Tier Member</p>
      <div className="flex justify-center gap-4">
        <div className="bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/20">
          <span className="text-xs text-on-surface-variant uppercase tracking-widest">ID: 824102</span>
        </div>
        <div className="bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/20 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-green-500" />
          <span className="text-xs text-on-surface-variant uppercase tracking-widest">Verified</span>
        </div>
      </div>
    </section>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <section className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-6">Account Settings</h3>
        {[
          { label: 'Security & Vault Access', icon: Lock, color: 'text-primary' },
          { label: 'Integrity Report', icon: Shield, color: 'text-blue-400', onClick: () => setScreen('integrity') },
          { label: 'Referral Program', icon: Star, color: 'text-yellow-400', onClick: () => setScreen('referral') },
          { label: 'Notification Prefs', icon: Bell, color: 'text-purple-400' },
        ].map((item, i) => (
          <div 
            key={i} 
            onClick={item.onClick}
            className="flex items-center justify-between p-4 glass-card rounded-2xl hover:bg-surface-container-high transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center ${item.color}`}>
                <item.icon className="w-5 h-5" />
              </div>
              <span className="font-medium">{item.label}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-on-surface-variant group-hover:translate-x-1 transition-transform" />
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-6">Support & Legal</h3>
        {[
          { label: '24/7 Concierge', icon: Phone, color: 'text-green-400' },
          { label: 'Knowledge Base', icon: BookOpen, color: 'text-blue-400' },
          { label: 'Terms of Service', icon: FileText, color: 'text-on-surface-variant' },
          { label: 'Privacy Policy', icon: Shield, color: 'text-on-surface-variant' },
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between p-4 glass-card rounded-2xl hover:bg-surface-container-high transition-all cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center ${item.color}`}>
                <item.icon className="w-5 h-5" />
              </div>
              <span className="font-medium">{item.label}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-on-surface-variant group-hover:translate-x-1 transition-transform" />
          </div>
        ))}
      </section>
    </div>

    <button className="w-full py-5 rounded-2xl border border-red-500/30 text-red-500 font-headline font-bold flex items-center justify-center gap-3 hover:bg-red-500/10 transition-all active:scale-95">
      <LogOut className="w-5 h-5" /> Sign Out from Vault
    </button>
  </motion.div>
);

const VaultDetailsScreen = ({ setScreen }: { setScreen: (s: Screen) => void }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="space-y-12 pb-12"
  >
    <button 
      onClick={() => setScreen('earn')}
      className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
    >
      <ChevronRight className="w-5 h-5 rotate-180" /> Back to Vaults
    </button>

    <section className="flex flex-col md:flex-row justify-between items-start gap-8">
      <div>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <Zap className="w-10 h-10" />
          </div>
          <div>
            <h2 className="text-4xl font-headline font-extrabold">Alpha Growth Vault</h2>
            <p className="text-on-surface-variant">High-frequency algorithmic trading strategy.</p>
          </div>
        </div>
      </div>
      <div className="text-right">
        <p className="text-on-surface-variant text-xs uppercase tracking-widest mb-1">Current APY</p>
        <p className="text-5xl font-headline font-extrabold text-primary">18.42%</p>
      </div>
    </section>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="glass-card p-6 rounded-2xl">
        <p className="text-on-surface-variant text-xs uppercase tracking-widest mb-4">Your Stake</p>
        <p className="text-2xl font-headline font-bold">$142,091.54</p>
        <p className="text-green-500 text-xs font-medium mt-1">+2.41 BTC equivalent</p>
      </div>
      <div className="glass-card p-6 rounded-2xl">
        <p className="text-on-surface-variant text-xs uppercase tracking-widest mb-4">Total Value Locked</p>
        <p className="text-2xl font-headline font-bold">$842.1M</p>
        <p className="text-on-surface-variant text-xs mt-1">Across 4,210 participants</p>
      </div>
      <div className="glass-card p-6 rounded-2xl">
        <p className="text-on-surface-variant text-xs uppercase tracking-widest mb-4">Risk Profile</p>
        <p className="text-2xl font-headline font-bold text-primary">Medium</p>
        <p className="text-on-surface-variant text-xs mt-1">Audited by CertiK & Quantstamp</p>
      </div>
    </div>

    <section className="bg-surface-container-low p-8 rounded-3xl">
      <h3 className="text-xl font-headline font-bold mb-8">Strategy Performance</h3>
      <div className="h-64 w-full flex items-end gap-2">
        {[0.4, 0.6, 0.5, 0.8, 0.7, 0.9, 1, 0.8, 0.9, 1.1, 1, 1.2, 1.3].map((h, i) => (
          <div key={i} className="flex-1 bg-primary/20 rounded-t-lg relative group" style={{ height: `${(h / 1.3) * 100}%` }}>
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-container-highest px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
              +{h.toFixed(1)}%
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4 text-xs text-on-surface-variant uppercase tracking-widest">
        <span>Jan</span>
        <span>Mar</span>
        <span>Jun</span>
        <span>Sep</span>
        <span>Dec</span>
      </div>
    </section>

    <div className="flex gap-4">
      <button className="flex-1 gold-gradient text-on-primary py-5 rounded-2xl font-headline font-bold text-lg shadow-xl shadow-primary/20 active:scale-95 transition-transform">
        Stake Assets
      </button>
      <button className="flex-1 border border-outline-variant/30 text-on-surface py-5 rounded-2xl font-headline font-bold text-lg hover:bg-surface-bright/10 active:scale-95 transition-transform">
        Unstake
      </button>
    </div>
  </motion.div>
);

const IntegrityReportScreen = ({ setScreen }: { setScreen: (s: Screen) => void }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    className="space-y-12 pb-12"
  >
    <button 
      onClick={() => setScreen('profile')}
      className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
    >
      <ChevronRight className="w-5 h-5 rotate-180" /> Back to Profile
    </button>

    <section className="text-center">
      <div className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mx-auto mb-6 border border-green-500/20">
        <ShieldCheck className="w-12 h-12" />
      </div>
      <h2 className="text-4xl font-headline font-extrabold mb-2">Integrity Report</h2>
      <p className="text-on-surface-variant">Real-time audit of your vault assets and security status.</p>
    </section>

    <div className="space-y-6">
      {[
        { label: 'Asset Backing', status: '1:1 Verified', desc: 'All assets are backed by physical reserves in cold storage.', icon: Lock, color: 'text-green-500' },
        { label: 'Multi-Sig Status', status: 'Active (3/5)', desc: 'Your vault requires 3 authorized signatures for any withdrawal.', icon: Shield, color: 'text-primary' },
        { label: 'Audit Log', status: 'Clean', desc: 'No unauthorized access attempts detected in the last 90 days.', icon: History, color: 'text-blue-400' },
        { label: 'Compliance', status: 'Tier 1', desc: 'Full compliance with institutional-grade regulatory standards.', icon: FileText, color: 'text-on-surface-variant' },
      ].map((item, i) => (
        <div key={i} className="glass-card p-6 rounded-2xl flex items-start gap-6">
          <div className={`w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center ${item.color}`}>
            <item.icon className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <h4 className="font-headline font-bold">{item.label}</h4>
              <span className={`text-xs font-bold uppercase tracking-widest ${item.color}`}>{item.status}</span>
            </div>
            <p className="text-on-surface-variant text-sm">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>

    <section className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/10">
      <div className="flex items-center gap-4 mb-6">
        <Terminal className="w-6 h-6 text-primary" />
        <h3 className="text-lg font-headline font-bold">Proof of Reserves Hash</h3>
      </div>
      <div className="bg-surface p-4 rounded-xl font-mono text-[10px] text-on-surface-variant break-all border border-outline-variant/20">
        0x72a1b9c8d7e6f5a4b3c2d1e0f9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b9c8d7e6f5a4b3c2d1e0f9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0
      </div>
      <button className="mt-4 flex items-center gap-2 text-xs text-primary font-bold uppercase tracking-widest hover:underline">
        <Copy className="w-3 h-3" /> Copy Full Audit Hash
      </button>
    </section>
  </motion.div>
);

const ReferralScreen = ({ setScreen }: { setScreen: (s: Screen) => void }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="space-y-12 pb-12"
  >
    <button 
      onClick={() => setScreen('profile')}
      className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
    >
      <ChevronRight className="w-5 h-5 rotate-180" /> Back to Profile
    </button>

    <section className="text-center bg-gradient-to-br from-primary/20 to-transparent p-12 rounded-[3rem] border border-primary/10">
      <Star className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
      <h2 className="text-4xl font-headline font-extrabold mb-4">Elite Referral</h2>
      <p className="text-on-surface-variant max-w-md mx-auto mb-8">Invite other high-net-worth individuals to the Vault and earn 10% of their staking rewards.</p>
      
      <div className="bg-surface-container-highest p-6 rounded-2xl border border-outline-variant/30 flex items-center justify-between gap-4">
        <span className="font-mono text-lg font-bold tracking-widest text-primary">VAULT-ALEX-8241</span>
        <button className="gold-gradient text-on-primary px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 active:scale-95 transition-transform">
          <Copy className="w-4 h-4" /> Copy
        </button>
      </div>
    </section>

    <div className="grid grid-cols-2 gap-6">
      <div className="glass-card p-8 rounded-3xl text-center">
        <p className="text-on-surface-variant text-xs uppercase tracking-widest mb-2">Total Earned</p>
        <p className="text-3xl font-headline font-extrabold text-primary">$12,401.50</p>
      </div>
      <div className="glass-card p-8 rounded-3xl text-center">
        <p className="text-on-surface-variant text-xs uppercase tracking-widest mb-2">Active Referrals</p>
        <p className="text-3xl font-headline font-extrabold text-primary">14</p>
      </div>
    </div>

    <section>
      <h3 className="text-xl font-headline font-bold mb-6">Recent Referral Rewards</h3>
      <div className="space-y-4">
        {[
          { name: 'James W.', date: 'Today', reward: '+$142.10', asset: 'BTC' },
          { name: 'Sarah L.', date: 'Yesterday', reward: '+$89.44', asset: 'ETH' },
          { name: 'Michael K.', date: 'Oct 24', reward: '+$212.05', asset: 'SOL' },
        ].map((ref, i) => (
          <div key={i} className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-primary">
                {ref.name[0]}
              </div>
              <div>
                <p className="font-bold">{ref.name}</p>
                <p className="text-xs text-on-surface-variant">{ref.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-green-500">{ref.reward}</p>
              <p className="text-xs text-on-surface-variant">{ref.asset} Reward</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </motion.div>
);

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');

  const renderScreen = () => {
    switch (screen) {
      case 'home': return <DashboardScreen setScreen={setScreen} />;
      case 'earn': return <EarnScreen setScreen={setScreen} />;
      case 'wallet': return <WalletScreen setScreen={setScreen} />;
      case 'profile': return <ProfileScreen setScreen={setScreen} />;
      case 'vault-details': return <VaultDetailsScreen setScreen={setScreen} />;
      case 'integrity': return <IntegrityReportScreen setScreen={setScreen} />;
      case 'referral': return <ReferralScreen setScreen={setScreen} />;
      default: return <DashboardScreen setScreen={setScreen} />;
    }
  };

  return (
    <div className="min-h-screen pb-32">
      <MarketTicker />
      <TopAppBar title="Crypto Bank" onProfileClick={() => setScreen('profile')} />
      <main className="pt-24 px-6 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {renderScreen()}
        </AnimatePresence>
      </main>
      <BottomNavBar currentScreen={screen} setScreen={setScreen} />
    </div>
  );
}
