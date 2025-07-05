// Services Management Component
const ServicesManagement = ({ dark }) => {
    const [services, setServices] = useState([
        { id: 1, name: 'Herrenschnitt', duration: 30, price: 35, category: 'Schnitt', popular: true, bookings: 156 },
        { id: 2, name: 'Damenschnitt', duration: 45, price: 55, category: 'Schnitt', popular: true, bookings: 243 },
        { id: 3, name: 'Färben (kurz)', duration: 90, price: 65, category: 'Farbe', popular: false, bookings: 89 },
        { id: 4, name: 'Färben (lang)', duration: 120, price: 95, category: 'Farbe', popular: true, bookings: 124 },
        { id: 5, name: 'Strähnen', duration: 120, price: 85, category: 'Farbe', popular: false, bookings: 78 },
        { id: 6, name: 'Bartpflege', duration: 30, price: 25, category: 'Bart', popular: false, bookings: 95 },
        { id: 7, name: 'Hochzeitsfrisur', duration: 90, price: 120, category: 'Styling', popular: true, bookings: 45 },
        { id: 8, name: 'Dauerwelle', duration: 150, price: 110, category: 'Behandlung', popular: false, bookings: 23 }
    ]);

    const [selectedCategory, setSelectedCategory] = useState('Alle');
    const [showAddModal, setShowAddModal] = useState(false);
    const [editingService, setEditingService] = useState(null);

    const categories = ['Alle', ...new Set(services.map(s => s.category))];

    const filteredServices = selectedCategory === 'Alle'
        ? services
        : services.filter(s => s.category === selectedCategory);

    const totalRevenue = services.reduce((sum, service) => sum + (service.price * service.bookings), 0);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                    Service-Verwaltung
                </h2>
                <button
                    onClick={() => setShowAddModal(true)}
                    className={`
                        px-4 py-2 rounded-lg font-medium transition-all
                        ${dark
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                        : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                    }
                    `}
                >
                    <Plus className="w-4 h-4 inline mr-2" />
                    Neuer Service
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <GlassCard dark={dark}>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                {services.length}
                            </p>
                            <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                Services
                            </p>
                        </div>
                        <Scissors className={`w-8 h-8 ${dark ? 'text-white/20' : 'text-gray-300'}`} />
                    </div>
                </GlassCard>
                <GlassCard dark={dark}>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                €{(totalRevenue / 1000).toFixed(1)}k
                            </p>
                            <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                Gesamtumsatz
                            </p>
                        </div>
                        <CircleDollarSign className={`w-8 h-8 ${dark ? 'text-white/20' : 'text-gray-300'}`} />
                    </div>
                </GlassCard>
                <GlassCard dark={dark}>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                €{Math.round(totalRevenue / services.reduce((sum, s) => sum + s.bookings, 0))}
                            </p>
                            <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                Ø Preis
                            </p>
                        </div>
                        <Tag className={`w-8 h-8 ${dark ? 'text-white/20' : 'text-gray-300'}`} />
                    </div>
                </GlassCard>
                <GlassCard dark={dark}>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                {services.filter(s => s.popular).length}
                            </p>
                            <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                Beliebt
                            </p>
                        </div>
                        <Star className={`w-8 h-8 ${dark ? 'text-white/20' : 'text-gray-300'}`} />
                    </div>
                </GlassCard>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Categories */}
                <GlassCard dark={dark}>
                    <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'} mb-4`}>
                        Kategorien
                    </h3>
                    <div className="space-y-2">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                                    selectedCategory === category
                                        ? dark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-50 text-blue-600'
                                        : dark ? 'hover:bg-white/10 text-white/80' : 'hover:bg-gray-100 text-gray-700'
                                }`}
                            >
                                <div className="flex items-center justify-between">
                                    <span>{category}</span>
                                    <span className={`text-xs ${dark ? 'text-white/40' : 'text-gray-500'}`}>
                                        {category === 'Alle' ? services.length : services.filter(s => s.category === category).length}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </GlassCard>

                {/* Services Grid */}
                <div className="lg:col-span-3">
                    <GlassCard dark={dark}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {filteredServices.map((service) => (
                                <div
                                    key={service.id}
                                    className={`
                                        p-4 rounded-xl border cursor-pointer transition-all
                                        ${dark
                                        ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                                        : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                                    }
                                    `}
                                    onClick={() => setEditingService(service)}
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h4 className={`font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                                {service.name}
                                            </h4>
                                            <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                                {service.category} • {service.duration} Min
                                            </p>
                                        </div>
                                        {service.popular && (
                                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                        )}
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                            €{service.price}
                                        </p>
                                        <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                            {service.bookings} Buchungen
                                        </p>
                                    </div>
                                    <div className="mt-3 pt-3 border-t dark:border-white/10">
                                        <div className="flex items-center justify-between text-xs">
                                            <span className={`${dark ? 'text-white/40' : 'text-gray-500'}`}>
                                                Umsatz
                                            </span>
                                            <span className={`font-medium ${dark ? 'text-white/80' : 'text-gray-700'}`}>
                                                €{(service.price * service.bookings).toLocaleString()}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </div>
            </div>

            {/* Service Modal */}
            {(showAddModal || editingService) && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => {
                            setShowAddModal(false);
                            setEditingService(null);
                        }}
                    />
                    <GlassCard dark={dark} className="relative z-10 w-full max-w-md">
                        <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'} mb-4`}>
                            {editingService ? 'Service bearbeiten' : 'Neuer Service'}
                        </h3>
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Service Name"
                                defaultValue={editingService?.name}
                                className={`w-full px-4 py-2 rounded-lg ${
                                    dark
                                        ? 'bg-white/10 text-white placeholder-white/40 border-white/20'
                                        : 'bg-gray-100 text-gray-900 placeholder-gray-400 border-gray-200'
                                } border focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                            />
                            <select
                                defaultValue={editingService?.category}
                                className={`w-full px-4 py-2 rounded-lg ${
                                    dark
                                        ? 'bg-white/10 text-white border-white/20'
                                        : 'bg-gray-100 text-gray-900 border-gray-200'
                                } border focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                            >
                                <option>Kategorie wählen</option>
                                <option>Schnitt</option>
                                <option>Farbe</option>
                                <option>Styling</option>
                                <option>Bart</option>
                                <option>Behandlung</option>
                            </select>
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="number"
                                    placeholder="Preis (€)"
                                    defaultValue={editingService?.price}
                                    className={`px-4 py-2 rounded-lg ${
                                        dark
                                            ? 'bg-white/10 text-white placeholder-white/40 border-white/20'
                                            : 'bg-gray-100 text-gray-900 placeholder-gray-400 border-gray-200'
                                    } border focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                                />
                                <input
                                    type="number"
                                    placeholder="Dauer (Min)"
                                    defaultValue={editingService?.duration}
                                    className={`px-4 py-2 rounded-lg ${
                                        dark
                                            ? 'bg-white/10 text-white placeholder-white/40 border-white/20'
                                            : 'bg-gray-100 text-gray-900 placeholder-gray-400 border-gray-200'
                                    } border focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                                />
                            </div>
                            <div className="flex items-center space-x-3">
                                <button
                                    onClick={() => {
                                        setShowAddModal(false);
                                        setEditingService(null);
                                    }}
                                    className={`flex-1 py-2 rounded-lg border ${
                                        dark
                                            ? 'border-white/20 text-white hover:bg-white/10'
                                            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                                    } transition-colors`}
                                >
                                    Abbrechen
                                </button>
                                <button className={`flex-1 py-2 rounded-lg ${
                                    dark
                                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                                        : 'bg-blue-500 text-white hover:bg-blue-600'
                                } transition-colors`}>
                                    {editingService ? 'Speichern' : 'Hinzufügen'}
                                </button>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            )}
        </div>
    );
};

// Inventory Management Component
const InventoryManagement = ({ dark }) => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Wella Koleston Perfect', category: 'Haarfarbe', stock: 12, minStock: 20, price: 8.50, supplier: 'Wella', status: 'low' },
        { id: 2, name: 'L\'Oréal Dia Light', category: 'Tönung', stock: 25, minStock: 15, price: 7.20, supplier: 'L\'Oréal', status: 'ok' },
        { id: 3, name: 'Schwarzkopf BlondMe', category: 'Blondierung', stock: 8, minStock: 10, price: 12.00, supplier: 'Schwarzkopf', status: 'critical' },
        { id: 4, name: 'Olaplex No.3', category: 'Pflege', stock: 30, minStock: 20, price: 24.00, supplier: 'Olaplex', status: 'ok' },
        { id: 5, name: 'Moroccanoil Treatment', category: 'Pflege', stock: 18, minStock: 15, price: 35.00, supplier: 'Moroccanoil', status: 'ok' }
    ]);

    const [selectedCategory, setSelectedCategory] = useState('Alle');
    const [showAddModal, setShowAddModal] = useState(false);
    const [showOrderModal, setShowOrderModal] = useState(false);

    const categories = ['Alle', ...new Set(products.map(p => p.category))];
    const filteredProducts = selectedCategory === 'Alle'
        ? products
        : products.filter(p => p.category === selectedCategory);

    const lowStockCount = products.filter(p => p.status === 'low' || p.status === 'critical').length;
    const totalValue = products.reduce((sum, p) => sum + (p.stock * p.price), 0);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                    Inventarverwaltung
                </h2>
                <div className="flex items-center space-x-3">
                    {lowStockCount > 0 && (
                        <div className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg ${
                            dark ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-600'
                        }`}>
                            <AlertCircle className="w-4 h-4" />
                            <span className="text-sm font-medium">{lowStockCount} niedrige Bestände</span>
                        </div>
                    )}
                    <button
                        onClick={() => setShowOrderModal(true)}
                        className={`
                            px-4 py-2 rounded-lg font-medium transition-all
                            ${dark
                            ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300'
                        }
                        `}
                    >
                        <ShoppingCart className="w-4 h-4 inline mr-2" />
                        Bestellung
                    </button>
                    <button
                        onClick={() => setShowAddModal(true)}
                        className={`
                            px-4 py-2 rounded-lg font-medium transition-all
                            ${dark
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                            : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                        }
                        `}
                    >
                        <Plus className="w-4 h-4 inline mr-2" />
                        Produkt hinzufügen
                    </button>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <GlassCard dark={dark}>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                {products.length}
                            </p>
                            <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                Produkte
                            </p>
                        </div>
                        <Package className={`w-8 h-8 ${dark ? 'text-white/20' : 'text-gray-300'}`} />
                    </div>
                </GlassCard>
                <GlassCard dark={dark}>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                €{totalValue.toFixed(0)}
                            </p>
                            <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                Lagerwert
                            </p>
                        </div>
                        <CircleDollarSign className={`w-8 h-8 ${dark ? 'text-white/20' : 'text-gray-300'}`} />
                    </div>
                </GlassCard>
                <GlassCard dark={dark}>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className={`text-2xl font-bold ${
                                lowStockCount > 0 ? 'text-red-500' : dark ? 'text-white' : 'text-gray-900'
                            }`}>
                                {lowStockCount}
                            </p>
                            <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                Nachbestellen
                            </p>
                        </div>
                        <AlertTriangle className={`w-8 h-8 ${
                            lowStockCount > 0 ? 'text-red-500/50' : dark ? 'text-white/20' : 'text-gray-300'
                        }`} />
                    </div>
                </GlassCard>
                <GlassCard dark={dark}>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                5
                            </p>
                            <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                Lieferanten
                            </p>
                        </div>
                        <Truck className={`w-8 h-8 ${dark ? 'text-white/20' : 'text-gray-300'}`} />
                    </div>
                </GlassCard>
            </div>

            {/* Products Table */}
            <GlassCard dark={dark}>
                <div className="flex items-center justify-between mb-4">
                    <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>
                        Produktbestand
                    </h3>
                    <div className="flex items-center space-x-2">
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className={`px-3 py-1 rounded-lg text-sm ${
                                dark
                                    ? 'bg-white/10 text-white border-white/20'
                                    : 'bg-gray-100 text-gray-900 border-gray-200'
                            } border focus:outline-none`}
                        >
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                        <tr className={`border-b ${dark ? 'border-white/10' : 'border-gray-200'}`}>
                            <th className={`text-left py-3 px-4 text-sm font-medium ${
                                dark ? 'text-white/60' : 'text-gray-600'
                            }`}>Produkt</th>
                            <th className={`text-left py-3 px-4 text-sm font-medium ${
                                dark ? 'text-white/60' : 'text-gray-600'
                            }`}>Kategorie</th>
                            <th className={`text-center py-3 px-4 text-sm font-medium ${
                                dark ? 'text-white/60' : 'text-gray-600'
                            }`}>Bestand</th>
                            <th className={`text-center py-3 px-4 text-sm font-medium ${
                                dark ? 'text-white/60' : 'text-gray-600'
                            }`}>Min. Bestand</th>
                            <th className={`text-right py-3 px-4 text-sm font-medium ${
                                dark ? 'text-white/60' : 'text-gray-600'
                            }`}>Preis</th>
                            <th className={`text-left py-3 px-4 text-sm font-medium ${
                                dark ? 'text-white/60' : 'text-gray-600'
                            }`}>Lieferant</th>
                            <th className={`text-center py-3 px-4 text-sm font-medium ${
                                dark ? 'text-white/60' : 'text-gray-600'
                            }`}>Status</th>
                            <th className={`text-right py-3 px-4 text-sm font-medium ${
                                dark ? 'text-white/60' : 'text-gray-600'
                            }`}>Aktionen</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredProducts.map((product) => (
                            <tr
                                key={product.id}
                                className={`border-b ${
                                    dark ? 'border-white/5 hover:bg-white/5' : 'border-gray-100 hover:bg-gray-50'
                                } transition-colors`}
                            >
                                <td className={`py-3 px-4 ${dark ? 'text-white' : 'text-gray-900'}`}>
                                    {product.name}
                                </td>
                                <td className={`py-3 px-4`}>
                                        <span className={`px-2 py-1 text-xs rounded-full ${
                                            dark ? 'bg-white/10 text-white/80' : 'bg-gray-100 text-gray-700'
                                        }`}>
                                            {product.category}
                                        </span>
                                </td>
                                <td className={`py-3 px-4 text-center font-medium ${
                                    product.status === 'critical' ? 'text-red-500' :
                                        product.status === 'low' ? 'text-yellow-500' :
                                            dark ? 'text-white' : 'text-gray-900'
                                }`}>
                                    {product.stock}
                                </td>
                                <td className={`py-3 px-4 text-center ${dark ? 'text-white/80' : 'text-gray-700'}`}>
                                    {product.minStock}
                                </td>
                                <td className={`py-3 px-4 text-right font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                    €{product.price.toFixed(2)}
                                </td>
                                <td className={`py-3 px-4 ${dark ? 'text-white/80' : 'text-gray-700'}`}>
                                    {product.supplier}
                                </td>
                                <td className="py-3 px-4 text-center">
                                        <span className={`px-2 py-1 text-xs rounded-full ${
                                            product.status === 'critical'
                                                ? 'bg-red-500/20 text-red-500'
                                                : product.status === 'low'
                                                    ? 'bg-yellow-500/20 text-yellow-500'
                                                    : 'bg-green-500/20 text-green-500'
                                        }`}>
                                            {product.status === 'critical' ? 'Kritisch' :
                                                product.status === 'low' ? 'Niedrig' : 'OK'}
                                        </span>
                                </td>
                                <td className="py-3 px-4 text-right">
                                    <div className="flex items-center justify-end space-x-1">
                                        <button className={`p-1 rounded ${
                                            dark ? 'hover:bg-white/10' : 'hover:bg-gray-200'
                                        }`}>
                                            <Edit className="w-4 h-4" />
                                        </button>
                                        <button className={`p-1 rounded ${
                                            dark ? 'hover:bg-white/10' : 'hover:bg-gray-200'
                                        }`}>
                                            <ShoppingCart className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </GlassCard>
        </div>
    );
};

// Analytics & Reporting Component
const AnalyticsReporting = ({ dark }) => {
    const [selectedPeriod, setSelectedPeriod] = useState('month');
    const [selectedMetric, setSelectedMetric] = useState('revenue');

    const metrics = {
        revenue: { label: 'Umsatz', value: 24580, change: 12.5, data: [18000, 19500, 21000, 20500, 22100, 24580] },
        customers: { label: 'Kunden', value: 276, change: 8.3, data: [245, 252, 258, 265, 270, 276] },
        appointments: { label: 'Termine', value: 342, change: 15.2, data: [280, 295, 310, 320, 335, 342] },
        rating: { label: 'Bewertung', value: 4.9, change: 2.1, data: [4.7, 4.8, 4.8, 4.9, 4.9, 4.9] }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                    Analytics & Berichte
                </h2>
                <div className="flex items-center space-x-3">
                    <div className={`flex p-1 ${dark ? 'bg-white/10' : 'bg-gray-100'} rounded-lg`}>
                        {['day', 'week', 'month', 'year'].map((period) => (
                            <button
                                key={period}
                                onClick={() => setSelectedPeriod(period)}
                                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                                    selectedPeriod === period
                                        ? dark ? 'bg-white text-black' : 'bg-white text-gray-900 shadow-sm'
                                        : dark ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                {period === 'day' ? 'Tag' :
                                    period === 'week' ? 'Woche' :
                                        period === 'month' ? 'Monat' : 'Jahr'}
                            </button>
                        ))}
                    </div>
                    <button className={`px-4 py-2 rounded-lg ${
                        dark ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-100 hover:bg-gray-200'
                    } transition-colors`}>
                        <Download className="w-4 h-4 inline mr-2" />
                        Export
                    </button>
                </div>
            </div>

            {/* Metrics Overview */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(metrics).map(([key, metric]) => (
                    <GlassCard
                        key={key}
                        dark={dark}
                        hover
                        onClick={() => setSelectedMetric(key)}
                        className={selectedMetric === key ? 'ring-2 ring-blue-500' : ''}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                {metric.label}
                            </span>
                            <div className={`flex items-center space-x-1 text-sm ${
                                metric.change > 0 ? 'text-green-500' : 'text-red-500'
                            }`}>
                                {metric.change > 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                <span>{Math.abs(metric.change)}%</span>
                            </div>
                        </div>
                        <p className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                            {key === 'revenue' ? `€${metric.value.toLocaleString()}` :
                                key === 'rating' ? metric.value : metric.value.toLocaleString()}
                        </p>
                        <div className="mt-3">
                            <MiniChart
                                data={metric.data}
                                color={metric.change > 0 ? 'green' : 'red'}
                                height={40}
                                dark={dark}
                            />
                        </div>
                    </GlassCard>
                ))}
            </div>

            {/* Detailed Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Performance Chart */}
                <GlassCard dark={dark}>
                    <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'} mb-4`}>
                        {metrics[selectedMetric].label} Entwicklung
                    </h3>
                    <AdvancedChart
                        type="line"
                        data={[...metrics[selectedMetric].data, ...Array(6).fill(0).map((_, i) =>
                            metrics[selectedMetric].data[metrics[selectedMetric].data.length - 1] * (1 + Math.random() * 0.1)
                        )]}
                        labels={['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']}
                        dark={dark}
                        height={300}
                    />
                </GlassCard>

                {/* Top Services Performance */}
                <GlassCard dark={dark}>
                    <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'} mb-4`}>
                        Service Performance
                    </h3>
                    <div className="space-y-3">
                        {[
                            { name: 'Färben & Schnitt', bookings: 156, revenue: 18720, growth: 15.2 },
                            { name: 'Herrenschnitt', bookings: 243, revenue: 8505, growth: -3.1 },
                            { name: 'Styling', bookings: 89, revenue: 5785, growth: 22.5 },
                            { name: 'Bartpflege', bookings: 124, revenue: 3100, growth: 8.7 },
                            { name: 'Dauerwelle', bookings: 23, revenue: 2530, growth: -12.3 }
                        ].map((service, idx) => (
                            <div key={idx} className={`p-3 rounded-lg ${
                                dark ? 'bg-white/5' : 'bg-gray-50'
                            }`}>
                                <div className="flex items-center justify-between mb-2">
                                    <span className={`font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                        {service.name}
                                    </span>
                                    <div className={`flex items-center space-x-1 text-sm ${
                                        service.growth > 0 ? 'text-green-500' : 'text-red-500'
                                    }`}>
                                        {service.growth > 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                        <span>{Math.abs(service.growth)}%</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <span className={`${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                            Buchungen:
                                        </span>
                                        <span className={`ml-2 font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                            {service.bookings}
                                        </span>
                                    </div>
                                    <div>
                                        <span className={`${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                            Umsatz:
                                        </span>
                                        <span className={`ml-2 font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                            €{service.revenue.toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <div className={`h-2 ${dark ? 'bg-white/10' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                                        <div
                                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                            style={{ width: `${(service.revenue / 18720) * 100}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </GlassCard>
            </div>

            {/* Additional Insights */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Peak Hours */}
                <GlassCard dark={dark}>
                    <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'} mb-4`}>
                        Stoßzeiten Analyse
                    </h3>
                    <div className="space-y-3">
                        {[
                            { time: '09:00-11:00', load: 45, revenue: 380 },
                            { time: '11:00-13:00', load: 85, revenue: 620 },
                            { time: '13:00-15:00', load: 60, revenue: 450 },
                            { time: '15:00-17:00', load: 95, revenue: 780 },
                            { time: '17:00-19:00', load: 75, revenue: 590 }
                        ].map((slot, idx) => (
                            <div key={idx}>
                                <div className="flex items-center justify-between mb-1">
                                    <span className={`text-sm ${dark ? 'text-white/80' : 'text-gray-700'}`}>
                                        {slot.time}
                                    </span>
                                    <span className={`text-sm font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                        €{slot.revenue}
                                    </span>
                                </div>
                                <div className={`h-2 ${dark ? 'bg-white/10' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                                    <div
                                        className={`h-full rounded-full transition-all duration-500 ${
                                            slot.load > 80 ? 'bg-red-500' :
                                                slot.load > 60 ? 'bg-yellow-500' : 'bg-green-500'
                                        }`}
                                        style={{ width: `${slot.load}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </GlassCard>

                {/* Customer Demographics */}
                <GlassCard dark={dark}>
                    <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'} mb-4`}>
                        Kundendemografie
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'} mb-2`}>
                                Geschlecht
                            </p>
                            <div className="grid grid-cols-2 gap-2">
                                <div className={`p-3 rounded-lg text-center ${dark ? 'bg-pink-500/20' : 'bg-pink-100'}`}>
                                    <p className={`text-2xl font-bold ${dark ? 'text-pink-400' : 'text-pink-600'}`}>
                                        68%
                                    </p>
                                    <p className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                        Weiblich
                                    </p>
                                </div>
                                <div className={`p-3 rounded-lg text-center ${dark ? 'bg-blue-500/20' : 'bg-blue-100'}`}>
                                    <p className={`text-2xl font-bold ${dark ? 'text-blue-400' : 'text-blue-600'}`}>
                                        32%
                                    </p>
                                    <p className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                        Männlich
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'} mb-2`}>
                                Altersgruppen
                            </p>
                            <div className="space-y-2">
                                {[
                                    { age: '18-25', percentage: 22 },
                                    { age: '26-35', percentage: 35 },
                                    { age: '36-45', percentage: 28 },
                                    { age: '46+', percentage: 15 }
                                ].map((group, idx) => (
                                    <div key={idx}>
                                        <div className="flex items-center justify-between text-sm mb-1">
                                            <span className={`${dark ? 'text-white/80' : 'text-gray-700'}`}>
                                                {group.age}
                                            </span>
                                            <span className={`font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                                {group.percentage}%
                                            </span>
                                        </div>
                                        <div className={`h-1.5 ${dark ? 'bg-white/10' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                                            <div
                                                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                                                style={{ width: `${group.percentage}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </GlassCard>

                {/* Revenue Sources */}
                <GlassCard dark={dark}>
                    <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'} mb-4`}>
                        Umsatzquellen
                    </h3>
                    <div className="space-y-3">
                        {[
                            { source: 'Services', amount: 18500, percentage: 75, color: 'blue' },
                            { source: 'Produkte', amount: 4200, percentage: 17, color: 'purple' },
                            { source: 'Gutscheine', amount: 1200, percentage: 5, color: 'green' },
                            { source: 'Sonstiges', amount: 680, percentage: 3, color: 'orange' }
                        ].map((source, idx) => (
                            <div key={idx}>
                                <div className="flex items-center justify-between mb-1">
                                    <span className={`text-sm ${dark ? 'text-white/80' : 'text-gray-700'}`}>
                                        {source.source}
                                    </span>
                                    <span className={`text-sm font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                        €{source.amount.toLocaleString()} ({source.percentage}%)
                                    </span>
                                </div>
                                <div className={`h-2 ${dark ? 'bg-white/10' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                                    <div
                                        className={`h-full rounded-full ${
                                            source.color === 'blue' ? 'bg-blue-500' :
                                                source.color === 'purple' ? 'bg-purple-500' :
                                                    source.color === 'green' ? 'bg-green-500' :
                                                        'bg-orange-500'
                                        }`}
                                        style={{ width: `${source.percentage}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={`mt-4 pt-4 border-t ${dark ? 'border-white/10' : 'border-gray-200'}`}>
                        <div className="flex items-center justify-between">
                            <span className={`text-sm font-medium ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                Gesamt
                            </span>
                            <span className={`text-lg font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                €24,580
                            </span>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </div>
    );
};

// Team Management Component
const TeamManagement = ({ dark }) => {
    const [teamMembers] = useState([
        {
            id: 1,
            name: 'Max Mustermann',
            role: 'Inhaber & Senior Stylist',
            avatar: 'https://ui-avatars.com/api/?name=Max+Mustermann&background=3b82f6&color=fff',
            performance: 94,
            monthlyRevenue: 8450,
            monthlyClients: 142,
            rating: 4.9,
            skills: ['Färben', 'Schnitt', 'Styling'],
            workingHours: 'Mo-Sa 9:00-18:00',
            nextVacation: '15.08 - 22.08'
        },
        {
            id: 2,
            name: 'Sarah Schmidt',
            role: 'Stylistin',
            avatar: 'https://ui-avatars.com/api/?name=Sarah+Schmidt&background=ec4899&color=fff',
            performance: 88,
            monthlyRevenue: 6230,
            monthlyClients: 98,
            rating: 4.8,
            skills: ['Schnitt', 'Föhnen', 'Beratung'],
            workingHours: 'Di-Sa 10:00-18:00',
            nextVacation: '-'
        },
        {
            id: 3,
            name: 'Julia Weber',
            role: 'Coloristin',
            avatar: 'https://ui-avatars.com/api/?name=Julia+Weber&background=8b5cf6&color=fff',
            performance: 91,
            monthlyRevenue: 7100,
            monthlyClients: 76,
            rating: 5.0,
            skills: ['Färben', 'Balayage', 'Strähnen'],
            workingHours: 'Mi-Sa 9:00-17:00',
            nextVacation: '01.09 - 14.09'
        }
    ]);

    const [selectedMember, setSelectedMember] = useState(null);
    const [showScheduleModal, setShowScheduleModal] = useState(false);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                    Team Management
                </h2>
                <div className="flex items-center space-x-3">
                    <button
                        onClick={() => setShowScheduleModal(true)}
                        className={`
                            px-4 py-2 rounded-lg font-medium transition-all
                            ${dark
                            ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300'
                        }
                        `}
                    >
                        <CalendarDays className="w-4 h-4 inline mr-2" />
                        Dienstplan
                    </button>
                    <button className={`
                        px-4 py-2 rounded-lg font-medium transition-all
                        ${dark
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                        : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                    }
                    `}>
                        <UserPlus className="w-4 h-4 inline mr-2" />
                        Mitarbeiter hinzufügen
                    </button>
                </div>
            </div>

            {/* Team Overview Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <GlassCard dark={dark}>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                {teamMembers.length}
                            </p>
                            <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                Mitarbeiter
                            </p>
                        </div>
                        <Users className={`w-8 h-8 ${dark ? 'text-white/20' : 'text-gray-300'}`} />
                    </div>
                </GlassCard>
                <GlassCard dark={dark}>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                €{teamMembers.reduce((sum, m) => sum + m.monthlyRevenue, 0).toLocaleString()}
                            </p>
                            <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                Team Umsatz
                            </p>
                        </div>
                        <CircleDollarSign className={`w-8 h-8 ${dark ? 'text-white/20' : 'text-gray-300'}`} />
                    </div>
                </GlassCard>
                <GlassCard dark={dark}>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                {(teamMembers.reduce((sum, m) => sum + m.rating, 0) / teamMembers.length).toFixed(1)}
                            </p>
                            <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                Ø Bewertung
                            </p>
                        </div>
                        <Star className={`w-8 h-8 ${dark ? 'text-white/20' : 'text-gray-300'}`} />
                    </div>
                </GlassCard>
                <GlassCard dark={dark}>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                {Math.round(teamMembers.reduce((sum, m) => sum + m.performance, 0) / teamMembers.length)}%
                            </p>
                            <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                Ø Performance
                            </p>
                        </div>
                        <Activity className={`w-8 h-8 ${dark ? 'text-white/20' : 'text-gray-300'}`} />
                    </div>
                </GlassCard>
            </div>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {teamMembers.map((member) => (
                    <GlassCard
                        key={member.id}
                        dark={dark}
                        hover
                        onClick={() => setSelectedMember(member)}
                        className="cursor-pointer"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center space-x-3">
                                <img
                                    src={member.avatar}
                                    alt={member.name}
                                    className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <p className={`font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                        {member.name}
                                    </p>
                                    <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                <span className={`text-sm font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                    {member.rating}
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className={`p-2 rounded-lg ${dark ? 'bg-white/5' : 'bg-gray-50'}`}>
                                <p className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                    Monatsumsatz
                                </p>
                                <p className={`font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                    €{member.monthlyRevenue}
                                </p>
                            </div>
                            <div className={`p-2 rounded-lg ${dark ? 'bg-white/5' : 'bg-gray-50'}`}>
                                <p className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                    Kunden
                                </p>
                                <p className={`font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                    {member.monthlyClients}
                                </p>
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="flex items-center justify-between mb-1">
                                <span className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                    Performance
                                </span>
                                <span className={`text-sm font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                    {member.performance}%
                                </span>
                            </div>
                            <div className={`h-2 ${dark ? 'bg-white/10' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                                <div
                                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                                    style={{ width: `${member.performance}%` }}
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-1">
                            {member.skills.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className={`px-2 py-1 text-xs rounded-full ${
                                        dark ? 'bg-white/10 text-white/80' : 'bg-gray-100 text-gray-700'
                                    }`}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </GlassCard>
                ))}
            </div>

            {/* Member Details Modal */}
            {selectedMember && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setSelectedMember(null)}
                    />
                    <GlassCard dark={dark} className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-4">
                                <img
                                    src={selectedMember.avatar}
                                    alt={selectedMember.name}
                                    className="w-16 h-16 rounded-full"
                                />
                                <div>
                                    <h3 className={`text-xl font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                        {selectedMember.name}
                                    </h3>
                                    <p className={`${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                        {selectedMember.role}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setSelectedMember(null)}
                                className={`p-2 rounded-lg ${
                                    dark ? 'hover:bg-white/10' : 'hover:bg-gray-100'
                                } transition-colors`}
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h4 className={`text-sm font-medium ${dark ? 'text-white/60' : 'text-gray-600'} mb-3`}>
                                    Arbeitszeiten
                                </h4>
                                <p className={`${dark ? 'text-white' : 'text-gray-900'}`}>
                                    {selectedMember.workingHours}
                                </p>
                            </div>
                            <div>
                                <h4 className={`text-sm font-medium ${dark ? 'text-white/60' : 'text-gray-600'} mb-3`}>
                                    Nächster Urlaub
                                </h4>
                                <pimport React, { useState, useEffect, useRef } from 'react';
                                import {
                                LayoutDashboard, Calendar, Users, Scissors, Package, CreditCard,
                                BarChart3, Settings, Bell, Search, Plus, Filter, ChevronRight,
                                TrendingUp, TrendingDown, Clock, Star, AlertCircle, CheckCircle,
                                DollarSign, UserPlus, Eye, MoreHorizontal, Sun, Moon, Menu, X,
                                Home, MessageSquare, FileText, LogOut, ChevronDown, Phone, Mail,
                                MapPin, Target, RefreshCw, Download, ArrowRight, Percent, Activity,
                                Shield, Zap, Award, BookOpen, Briefcase, Coffee, Heart, Image,
                                Smartphone, Repeat, Gift, Timer, PieChart, BarChart, CalendarDays,
                                UserCheck, ShoppingCart, Palette, Camera, Instagram, Facebook, Globe,
                                Sparkles, MousePointer, UserX, ArrowUpRight, ArrowDownRight, Cpu, Wifi,
                                HelpCircle, ChevronLeft, Inbox, Archive, Trash2, Send, PlayCircle,
                                PauseCircle, AlertTriangle, CheckCircle2, XCircle, Info, Database,
                                Server, Lock, Unlock, Share2, Copy, Edit, Save, ZoomIn, Building2,
                                Banknote, Receipt, Gauge, Layers, Grid3x3, List, BarChart2, LineChart,
                                Bot, Brain, Lightbulb, Trophy, Medal, Crown, Gem, Wallet,
                                Calculator, Printer, QrCode, Scan, WifiOff, Battery, BatteryLow,
                                Volume2, VolumeX, Mic, Video, Headphones, Monitor, Tablet, Watch,
                                CloudRain, CloudSnow, Wind, Droplets, Thermometer, Sunrise, Sunset,
                                Brush, Droplet, Sparkle, CircleDollarSign,
                                MessageCircle, ThumbsUp, AlertOctagon, CheckSquare, Square, MoreVertical,
                                Tag, Bookmark, Clock3, Clock4, Clock5,
                                Euro, Hash, BarChart4,
                                FileBarChart, FileSpreadsheet, Folder, FolderOpen, File,
                                Coins, HandCoins, PiggyBank,
                                ShoppingBag, Store, Package2, Truck, PackageCheck,
                                UserCircle, UserCog, UserMinus, UsersRound, Contact,
                                CalendarCheck, CalendarClock, CalendarX, CalendarRange,
                                BellRing, BellOff, BellPlus, Megaphone, Radio,
                                Navigation, MessageSquareText,
                                ArrowLeft, History, MapPinned, Navigation2, ShieldCheck,
                                Fingerprint, FolderLock, ClipboardCheck,
                                Beaker, TestTube, Wand2, CircleCheckBig,
                                CalendarHeart, PartyPopper, Cake,
                                Music, Volume, PlaySquare,
                                CheckCheck, CircleCheck, CircleX,
                                Signal, BatteryCharging, Pause, Play, SkipForward,
                                Link, Link2, ExternalLink, Maximize2, Minimize2,
                                BookmarkPlus, BookmarkMinus, BookmarkCheck,
                                FolderPlus, FolderMinus, FolderCheck,
                                Ticket,
                                Command, Option,
                                Sliders, ToggleLeft, ToggleRight,
                                Bluetooth, Cast, Flashlight,
                                GitBranch, GitCommit, GitMerge,
                                Infinity, Key, Keyboard,
                                Landmark, Languages, Laptop,
                                LifeBuoy, Loader,
                                MessagesSquare, MicOff, Minimize,
                                Mountain, Move, Network,
                                Paperclip, PenTool,
                                Power, PowerOff, Presentation,
                                Puzzle, RefreshCcw,
                                Repeat2, Rewind, Rocket,
                                RotateCcw, RotateCw, Rss,
                                ScanLine, Share,
                                ShieldAlert, ShieldOff, Shuffle,
                                Sidebar, SkipBack, Slash,
                                Smile, Snowflake, Speaker,
                                StopCircle,
                                Sword,
                                Table, Terminal,
                                Trash,
                                TreePine, Triangle, Tv,
                                Type, Umbrella, Underline,
                                Upload, User,
                                VideoOff, Voicemail,
                                Volume1,
                                Wand,
                                Waves, Webcam,
                                XSquare,
                                Youtube,
                                ZoomOut, ChevronUp, ChevronsUp,
                                ChevronsDown, ChevronsLeft, ChevronsRight,
                                ArrowUp, ArrowDown, ArrowLeftRight,
                                ArrowRightLeft, ArrowUpDown, CornerDownLeft,
                                CornerDownRight, CornerLeftDown, CornerLeftUp,
                                CornerRightDown, CornerRightUp, CornerUpLeft,
                                CornerUpRight, MoveDown, MoveLeft,
                                MoveRight, MoveUp
                            } from 'lucide-react';

                                // Enhanced Glass Card Component with animations
                                const GlassCard = ({ children, className = '', hover = false, onClick, padding = true, dark, blur = 'md', depth = 1, animate = false }) => {
                                const depthStyles = {
                                1: dark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-sm',
                                2: dark ? 'bg-white/10 border-white/20' : 'bg-white border-gray-300 shadow-md',
                                3: dark ? 'bg-white/15 border-white/30' : 'bg-white border-gray-400 shadow-lg'
                            };

                                return (
                                <div
                                onClick={onClick}
                                className={`
                ${depthStyles[depth]}
                backdrop-blur-${blur} border rounded-xl
                ${hover
                                    ? dark
                                        ? 'hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]'
                                        : 'hover:shadow-xl hover:border-gray-300 hover:scale-[1.02] active:scale-[0.98]'
                                    : ''
                                }
                transition-all duration-300
                ${onClick ? 'cursor-pointer' : ''}
                ${padding ? 'p-4 md:p-6' : ''}
                ${animate ? 'animate-fade-in' : ''}
                ${className}
            `}
                            >
                                {children}
                            </div>
                            );
                            };

                            // Advanced Chart Component with interactions
                            const AdvancedChart = ({ type = 'line', data, labels, dark, height = 200, interactive = true }) => {
                            const canvasRef = useRef(null);
                            const [hoveredIndex, setHoveredIndex] = useState(null);

                            useEffect(() => {
                            const canvas = canvasRef.current;
                            if (!canvas) return;
                            const ctx = canvas.getContext('2d');
                            const rect = canvas.getBoundingClientRect();
                            const width = rect.width;
                            const height = rect.height;

                            // Set canvas size
                            canvas.width = width;
                            canvas.height = height;

                            // Clear canvas
                            ctx.clearRect(0, 0, width, height);

                            // Draw grid
                            ctx.strokeStyle = dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
                            ctx.lineWidth = 1;

                            // Horizontal grid lines
                            for (let i = 0; i <= 5; i++) {
                            const y = (height / 5) * i;
                            ctx.beginPath();
                            ctx.moveTo(0, y);
                            ctx.lineTo(width, y);
                            ctx.stroke();
                        }

                            // Vertical grid lines
                            for (let i = 0; i <= data.length - 1; i++) {
                            const x = (width / (data.length - 1)) * i;
                            ctx.beginPath();
                            ctx.moveTo(x, 0);
                            ctx.lineTo(x, height);
                            ctx.stroke();
                        }

                            if (type === 'line' && data && data.length > 0) {
                            const gradient = ctx.createLinearGradient(0, 0, 0, height);
                            gradient.addColorStop(0, 'rgba(59, 130, 246, 0.8)');
                            gradient.addColorStop(1, 'rgba(59, 130, 246, 0.1)');

                            ctx.fillStyle = gradient;
                            ctx.strokeStyle = '#3b82f6';
                            ctx.lineWidth = 2;

                            // Draw area
                            ctx.beginPath();
                            data.forEach((value, index) => {
                            const x = (width / (data.length - 1)) * index;
                            const y = height - (value / Math.max(...data)) * height * 0.9;

                            if (index === 0) {
                            ctx.moveTo(x, y);
                        } else {
                            ctx.lineTo(x, y);
                        }
                        });
                            ctx.lineTo(width, height);
                            ctx.lineTo(0, height);
                            ctx.closePath();
                            ctx.fill();

                            // Draw line
                            ctx.beginPath();
                            data.forEach((value, index) => {
                            const x = (width / (data.length - 1)) * index;
                            const y = height - (value / Math.max(...data)) * height * 0.9;

                            if (index === 0) {
                            ctx.moveTo(x, y);
                        } else {
                            ctx.lineTo(x, y);
                        }
                        });
                            ctx.stroke();

                            // Draw points and values
                            data.forEach((value, index) => {
                            const x = (width / (data.length - 1)) * index;
                            const y = height - (value / Math.max(...data)) * height * 0.9;

                            // Draw point
                            ctx.beginPath();
                            ctx.arc(x, y, hoveredIndex === index ? 6 : 4, 0, Math.PI * 2);
                            ctx.fillStyle = '#3b82f6';
                            ctx.fill();
                            ctx.strokeStyle = dark ? '#000' : '#fff';
                            ctx.lineWidth = 2;
                            ctx.stroke();

                            // Draw value on hover
                            if (hoveredIndex === index) {
                            ctx.fillStyle = dark ? '#fff' : '#000';
                            ctx.font = '12px Inter, system-ui, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(value.toLocaleString(), x, y - 10);
                        }
                        });
                        } else if (type === 'bar') {
                            const barWidth = width / data.length * 0.8;
                            const spacing = width / data.length * 0.2;

                            data.forEach((value, index) => {
                            const x = index * (barWidth + spacing) + spacing / 2;
                            const barHeight = (value / Math.max(...data)) * height * 0.9;
                            const y = height - barHeight;

                            // Bar gradient
                            const barGradient = ctx.createLinearGradient(0, y, 0, height);
                            barGradient.addColorStop(0, hoveredIndex === index ? '#3b82f6' : '#60a5fa');
                            barGradient.addColorStop(1, hoveredIndex === index ? '#1e40af' : '#3b82f6');
                            ctx.fillStyle = barGradient;
                            ctx.fillRect(x, y, barWidth, barHeight);

                            // Value on top
                            if (hoveredIndex === index) {
                            ctx.fillStyle = dark ? '#fff' : '#000';
                            ctx.font = '12px Inter, system-ui, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(value.toLocaleString(), x + barWidth / 2, y - 5);
                        }
                        });
                        }

                            // Labels
                            if (labels) {
                            ctx.fillStyle = dark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)';
                            ctx.font = '11px Inter, system-ui, sans-serif';
                            ctx.textAlign = 'center';
                            labels.forEach((label, index) => {
                            const x = type === 'bar'
                            ? index * (width / data.length) + (width / data.length) / 2
                            : (width / (labels.length - 1)) * index;
                            ctx.fillText(label, x, height + 15);
                        });
                        }
                        }, [data, type, dark, height, labels, hoveredIndex]);

                            const handleMouseMove = (e) => {
                            if (!interactive) return;
                            const canvas = canvasRef.current;
                            const rect = canvas.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const segmentWidth = rect.width / data.length;
                            const index = Math.floor(x / segmentWidth);
                            setHoveredIndex(index >= 0 && index < data.length ? index : null);
                        };

                            return (
                            <div className="relative w-full" style={{ height: height + 20 }}>
                            <canvas
                                ref={canvasRef}
                                className="w-full cursor-crosshair"
                                style={{ height: height + 20 }}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={() => setHoveredIndex(null)}
                            />
                        </div>
                        );
                        };

                        // Enhanced KPI Card with animations
                        const KPICard = ({ title, value, target, icon: Icon, color = 'blue', dark, trend, subtitle, comparison }) => {
                        const percentage = target ? Math.min((value / target) * 100, 100) : 0;
                        const radius = 45;
                        const circumference = 2 * Math.PI * radius;
                        const strokeDashoffset = circumference - (percentage / 100) * circumference;

                        const colorClasses = {
                        blue: 'text-blue-500',
                        green: 'text-green-500',
                        purple: 'text-purple-500',
                        orange: 'text-orange-500',
                        red: 'text-red-500',
                        yellow: 'text-yellow-500',
                        pink: 'text-pink-500',
                        teal: 'text-teal-500'
                    };

                        const gradients = {
                        blue: ['#3B82F6', '#1E40AF'],
                        green: ['#10B981', '#059669'],
                        purple: ['#8B5CF6', '#6D28D9'],
                        orange: ['#F59E0B', '#D97706'],
                        red: ['#EF4444', '#DC2626'],
                        yellow: ['#F59E0B', '#D97706'],
                        pink: ['#EC4899', '#DB2777'],
                        teal: ['#14B8A6', '#0D9488']
                    };

                        return (
                        <GlassCard dark={dark} hover className="group">
                        <div className="flex items-center justify-between">
                            <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-3">
                                    <div className={`p-2 rounded-lg ${
                                        dark ? 'bg-white/10' : 'bg-gray-100'
                                    } group-hover:scale-110 transition-transform`}>
                                        <Icon className={`w-5 h-5 ${colorClasses[color]}`} />
                                    </div>
                                    <h3 className={`text-sm font-medium ${dark ? 'text-white/80' : 'text-gray-700'}`}>
                                        {title}
                                    </h3>
                                </div>
                                <div className="space-y-1">
                                    <p className={`text-3xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                        {typeof value === 'number' ? value.toLocaleString() : value}
                                    </p>
                                    {subtitle && (
                                        <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                            {subtitle}
                                        </p>
                                    )}
                                    {target && (
                                        <p className={`text-xs ${dark ? 'text-white/40' : 'text-gray-500'}`}>
                                            Ziel: {target.toLocaleString()}
                                        </p>
                                    )}
                                    {trend !== undefined && (
                                        <div className={`flex items-center space-x-1 text-sm ${
                                            trend > 0 ? 'text-green-500' : 'text-red-500'
                                        }`}>
                                            {trend > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                                            <span className="font-medium">{Math.abs(trend)}%</span>
                                            {comparison && (
                                                <span className={`text-xs ${dark ? 'text-white/40' : 'text-gray-500'}`}>
                                        vs. {comparison}
                                    </span>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                            {target && (
                                <div className="relative">
                                    <svg width="110" height="110" className="transform -rotate-90">
                                        <circle
                                            cx="55"
                                            cy="55"
                                            r={radius}
                                            stroke={dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}
                                            strokeWidth="8"
                                            fill="none"
                                        />
                                        <circle
                                            cx="55"
                                            cy="55"
                                            r={radius}
                                            stroke={`url(#gradient-${color}-${title})`}
                                            strokeWidth="8"
                                            fill="none"
                                            strokeDasharray={circumference}
                                            strokeDashoffset={strokeDashoffset}
                                            strokeLinecap="round"
                                            className="transition-all duration-1000"
                                        />
                                        <defs>
                                            <linearGradient id={`gradient-${color}-${title}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor={gradients[color][0]} />
                                                <stop offset="100%" stopColor={gradients[color][1]} />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                <span className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                    {Math.round(percentage)}%
                                </span>
                                            <span className={`text-xs block ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                    erreicht
                                </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </GlassCard>
                    );
                    };

                    // Professional Sidebar Component
                    const Sidebar = ({ dark, collapsed, setCollapsed, activeView, setActiveView }) => {
                    const navigationSections = [
                {
                    title: 'Hauptmenü',
                    items: [
                { id: 'overview', icon: LayoutDashboard, label: 'Übersicht', badge: null },
                { id: 'appointments', icon: Calendar, label: 'Termine', badge: '8' },
                { id: 'customers', icon: Users, label: 'Kunden', badge: '276' },
                { id: 'services', icon: Scissors, label: 'Services', badge: null }
                    ]
                },
                {
                    title: 'Geschäft',
                    items: [
                { id: 'finance', icon: CreditCard, label: 'Finanzen', badge: null },
                { id: 'inventory', icon: Package, label: 'Inventar', badge: '!', badgeType: 'warning' },
                { id: 'invoices', icon: Receipt, label: 'Rechnungen', badge: '3' },
                { id: 'reports', icon: FileBarChart, label: 'Berichte', badge: 'NEU', badgeType: 'success' }
                    ]
                },
                {
                    title: 'Marketing',
                    items: [
                { id: 'analytics', icon: BarChart3, label: 'Analytics', badge: null },
                { id: 'marketing', icon: Megaphone, label: 'Kampagnen', badge: '2' },
                { id: 'social', icon: Share2, label: 'Social Media', badge: null },
                { id: 'reviews', icon: Star, label: 'Bewertungen', badge: '5.0', badgeType: 'success' }
                    ]
                },
                {
                    title: 'Verwaltung',
                    items: [
                { id: 'team', icon: UsersRound, label: 'Team', badge: null },
                { id: 'settings', icon: Settings, label: 'Einstellungen', badge: null },
                { id: 'ai-insights', icon: Brain, label: 'AI Insights', badge: 'PRO', badgeType: 'pro' },
                { id: 'help', icon: HelpCircle, label: 'Hilfe', badge: null }
                    ]
                }
                    ];

                    return (
                    <aside className={`
            fixed left-0 top-0 h-full z-40 transition-all duration-300
            ${dark ? 'bg-black/90' : 'bg-white'}
            backdrop-blur-xl border-r
            ${dark ? 'border-white/10' : 'border-gray-200'}
            ${collapsed ? 'w-20' : 'w-72'}
            hidden lg:block
        `}>
                    <div className="flex flex-col h-full">
                        {/* Header */}
                        <div className={`p-6 border-b ${dark ? 'border-white/10' : 'border-gray-200'}`}>
                            <div className="flex items-center justify-between">
                                {!collapsed && (
                                    <div className="flex items-center space-x-3">
                                        <div className={`w-12 h-12 rounded-2xl ${
                                            dark ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-gradient-to-br from-blue-400 to-purple-500'
                                        } flex items-center justify-center shadow-lg`}>
                                            <Scissors className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h1 className={`text-xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                                SalonPro
                                            </h1>
                                            <p className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                                Enterprise Edition
                                            </p>
                                        </div>
                                    </div>
                                )}
                                <button
                                    onClick={() => setCollapsed(!collapsed)}
                                    className={`${dark ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-900'} 
                                       p-2 rounded-lg hover:bg-white/10 transition-colors`}
                                >
                                    {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
                            {navigationSections.map((section, sectionIdx) => (
                                <div key={sectionIdx}>
                                    {!collapsed && (
                                        <p className={`text-xs font-medium uppercase tracking-wider mb-2 px-3 ${
                                            dark ? 'text-white/40' : 'text-gray-500'
                                        }`}>
                                            {section.title}
                                        </p>
                                    )}
                                    <nav className="space-y-1">
                                        {section.items.map(item => (
                                            <button
                                                key={item.id}
                                                onClick={() => setActiveView(item.id)}
                                                className={`
                                            w-full flex items-center justify-between p-3 rounded-xl
                                            transition-all duration-200 group relative
                                            ${activeView === item.id
                                                    ? dark
                                                        ? 'bg-white/10 text-white shadow-lg'
                                                        : 'bg-gradient-to-r from-blue-50 to-purple-50 text-gray-900 shadow-md'
                                                    : dark
                                                        ? 'text-white/60 hover:text-white hover:bg-white/5'
                                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                                }
                                        `}
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <item.icon className={`w-5 h-5 flex-shrink-0 ${
                                                        activeView === item.id ? 'text-blue-500' : ''
                                                    }`} />
                                                    {!collapsed && <span className="font-medium">{item.label}</span>}
                                                </div>
                                                {!collapsed && item.badge && (
                                                    <span className={`
                                                px-2 py-0.5 text-xs font-medium rounded-full
                                                ${item.badgeType === 'success'
                                                        ? 'bg-green-500 text-white'
                                                        : item.badgeType === 'warning'
                                                            ? 'bg-yellow-500 text-white animate-pulse'
                                                            : item.badgeType === 'pro'
                                                                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                                                                : dark
                                                                    ? 'bg-white/20 text-white'
                                                                    : 'bg-gray-200 text-gray-700'}
                                            `}>
                                                {item.badge}
                                            </span>
                                                )}
                                                {activeView === item.id && (
                                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-500 rounded-r-full" />
                                                )}
                                            </button>
                                        ))}
                                    </nav>
                                </div>
                            ))}
                        </div>

                        {/* User Profile & Actions */}
                        <div className={`p-4 border-t ${dark ? 'border-white/10' : 'border-gray-200'} space-y-3`}>
                            {/* Quick Stats */}
                            {!collapsed && (
                                <div className={`p-3 rounded-lg ${dark ? 'bg-white/5' : 'bg-gray-50'}`}>
                                    <div className="flex items-center justify-between mb-2">
                                <span className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                    Heute
                                </span>
                                        <span className={`text-sm font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                    €1,247
                                </span>
                                    </div>
                                    <div className={`h-1.5 ${dark ? 'bg-white/10' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                                        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                             style={{ width: '83%' }} />
                                    </div>
                                </div>
                            )}

                            {/* User Profile */}
                            <button className={`w-full p-3 rounded-xl ${
                                dark ? 'hover:bg-white/5' : 'hover:bg-gray-50'
                            } transition-colors flex items-center ${
                                collapsed ? 'justify-center' : 'space-x-3'
                            }`}>
                                <div className="relative">
                                    <img
                                        src="https://ui-avatars.com/api/?name=Max+Mustermann&background=3b82f6&color=fff"
                                        alt="Profile"
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-black" />
                                </div>
                                {!collapsed && (
                                    <>
                                        <div className="flex-1 text-left">
                                            <p className={`text-sm font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                                Max Mustermann
                                            </p>
                                            <p className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                                Inhaber & Stylist
                                            </p>
                                        </div>
                                        <LogOut className={`w-4 h-4 ${dark ? 'text-white/40' : 'text-gray-400'}`} />
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </aside>
            );
            };

            // Mobile Navigation
            const MobileNav = ({ activeView, setActiveView, dark }) => {
            const mainItems = [
        { id: 'overview', icon: Home, label: 'Start' },
        { id: 'appointments', icon: Calendar, label: 'Termine' },
        { id: 'quick-booking', icon: Plus, label: '', isAction: true },
        { id: 'customers', icon: Users, label: 'Kunden' },
        { id: 'more', icon: MoreHorizontal, label: 'Mehr' }
            ];

            return (
            <div className={`fixed bottom-0 left-0 right-0 z-50 md:hidden ${
            dark ? 'bg-black/90' : 'bg-white/90'
        } backdrop-blur-xl border-t ${
            dark ? 'border-white/10' : 'border-gray-200'
        } safe-area-bottom`}>
            <div className="grid grid-cols-5 items-center">
                {mainItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveView(item.id)}
                        className={`
                            relative flex flex-col items-center justify-center py-2
                            ${item.isAction
                            ? ''
                            : activeView === item.id
                                ? dark ? 'text-white' : 'text-gray-900'
                                : dark ? 'text-white/40' : 'text-gray-400'
                        }
                            transition-all duration-200
                        `}
                    >
                        {item.isAction ? (
                            <div className={`
                                absolute -top-6 p-3 rounded-full shadow-lg
                                ${dark ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gradient-to-r from-blue-500 to-purple-500'}
                                text-white transform hover:scale-110 transition-transform
                            `}>
                                <item.icon className="w-6 h-6" />
                            </div>
                        ) : (
                            <>
                                <item.icon className="w-5 h-5 mb-1" />
                                <span className="text-xs">{item.label}</span>
                                {activeView === item.id && (
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full" />
                                )}
                            </>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

// Enhanced Header Component
const Header = ({ dark, setDarkMode, title, subtitle, showNotifications, setShowNotifications, notificationCount }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    return (
        <header className={`
            sticky top-0 z-30 px-4 md:px-8 py-4
            ${dark ? 'bg-black/80' : 'bg-white/90'}
            backdrop-blur-xl border-b
            ${dark ? 'border-white/10' : 'border-gray-200'}
        `}>
            <div className="flex items-center justify-between">
                <div className="flex-1">
                    <h1 className={`text-2xl md:text-3xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                        {title}
                    </h1>
                    {subtitle && (
                        <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'} mt-1`}>
                            {subtitle}
                        </p>
                    )}
                </div>

                <div className="flex items-center space-x-2 md:space-x-4">
                    {/* Search - Desktop */}
                    <div className={`hidden md:block relative`}>
                        <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                            dark ? 'text-white/40' : 'text-gray-400'
                        }`} />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Suchen..."
                            className={`pl-10 pr-4 py-2 rounded-xl w-64 ${
                                dark
                                    ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                                    : 'bg-gray-100 border-gray-200 text-gray-900 placeholder-gray-400'
                            } border focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all`}
                        />
                    </div>

                    {/* Search - Mobile */}
                    <button
                        onClick={() => setShowSearch(!showSearch)}
                        className={`md:hidden p-2 rounded-lg ${
                            dark ? 'hover:bg-white/10' : 'hover:bg-gray-100'
                        } transition-colors`}
                    >
                        <Search className={`w-5 h-5 ${dark ? 'text-white' : 'text-gray-700'}`} />
                    </button>

                    {/* Quick Actions */}
                    <button className={`p-2 rounded-lg ${
                        dark ? 'hover:bg-white/10' : 'hover:bg-gray-100'
                    } transition-colors hidden md:block`}>
                        <RefreshCw className={`w-5 h-5 ${dark ? 'text-white' : 'text-gray-700'}`} />
                    </button>

                    {/* Theme Toggle */}
                    <button
                        onClick={() => setDarkMode(!dark)}
                        className={`p-2 rounded-lg ${
                            dark ? 'hover:bg-white/10' : 'hover:bg-gray-100'
                        } transition-colors`}
                    >
                        {dark ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-gray-700" />}
                    </button>

                    {/* Notifications */}
                    <button
                        onClick={() => setShowNotifications(!showNotifications)}
                        className={`relative p-2 rounded-lg ${
                            dark ? 'hover:bg-white/10' : 'hover:bg-gray-100'
                        } transition-colors`}
                    >
                        <Bell className={`w-5 h-5 ${dark ? 'text-white' : 'text-gray-700'}`} />
                        {notificationCount > 0 && (
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                                {notificationCount > 9 ? '9+' : notificationCount}
                            </div>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Search Bar */}
            {showSearch && (
                <div className="md:hidden mt-4">
                    <div className="relative">
                        <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                            dark ? 'text-white/40' : 'text-gray-400'
                        }`} />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Suchen..."
                            className={`w-full pl-10 pr-4 py-3 rounded-xl ${
                                dark
                                    ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                                    : 'bg-gray-100 border-gray-200 text-gray-900 placeholder-gray-400'
                            } border focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                            autoFocus
                        />
                    </div>
                </div>
            )}
        </header>
    );
};

// Enhanced Overview Dashboard
const OverviewDashboard = ({ dark }) => {
    const [selectedPeriod, setSelectedPeriod] = useState('today');
    const [refreshing, setRefreshing] = useState(false);

    // Real-time data simulation
    const [liveData, setLiveData] = useState({
        revenue: 1247,
        customers: 15,
        appointments: 12,
        avgServiceTime: 45
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setLiveData(prev => ({
                ...prev,
                revenue: prev.revenue + Math.floor(Math.random() * 50),
                customers: Math.random() > 0.7 ? prev.customers + 1 : prev.customers
            }));
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    const handleRefresh = () => {
        setRefreshing(true);
        setTimeout(() => setRefreshing(false), 1000);
    };

    return (
        <div className="space-y-4 md:space-y-6">
            {/* Period Selector */}
            <div className="flex items-center justify-between">
                <div className={`flex p-1 ${dark ? 'bg-white/10' : 'bg-gray-100'} rounded-xl`}>
                    {['today', 'week', 'month', 'year'].map((period) => (
                        <button
                            key={period}
                            onClick={() => setSelectedPeriod(period)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                selectedPeriod === period
                                    ? dark ? 'bg-white text-black shadow-lg' : 'bg-white text-gray-900 shadow-md'
                                    : dark ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            {period === 'today' ? 'Heute' :
                                period === 'week' ? 'Woche' :
                                    period === 'month' ? 'Monat' : 'Jahr'}
                        </button>
                    ))}
                </div>
                <button
                    onClick={handleRefresh}
                    className={`p-2 rounded-lg ${
                        dark ? 'hover:bg-white/10' : 'hover:bg-gray-100'
                    } transition-colors ${refreshing ? 'animate-spin' : ''}`}
                >
                    <RefreshCw className={`w-5 h-5 ${dark ? 'text-white' : 'text-gray-700'}`} />
                </button>
            </div>

            {/* Live Stats Banner */}
            <GlassCard dark={dark} className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
                <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>
                            Live Performance
                        </h3>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                Echtzeit
                            </span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                            <p className={`text-3xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                €{liveData.revenue.toLocaleString()}
                            </p>
                            <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                Tagesumsatz
                            </p>
                        </div>
                        <div>
                            <p className={`text-3xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                {liveData.customers}
                            </p>
                            <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                Kunden heute
                            </p>
                        </div>
                        <div>
                            <p className={`text-3xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                {liveData.appointments}/16
                            </p>
                            <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                Termine
                            </p>
                        </div>
                        <div>
                            <p className={`text-3xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                {liveData.avgServiceTime}min
                            </p>
                            <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                Ø Service Zeit
                            </p>
                        </div>
                    </div>
                </div>
            </GlassCard>

            {/* KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <KPICard
                    title="Monatsumsatz"
                    value={24580}
                    target={30000}
                    icon={CircleDollarSign}
                    color="green"
                    dark={dark}
                    trend={12.5}
                    subtitle="€5,420 bis zum Ziel"
                    comparison="letzter Monat"
                />
                <KPICard
                    title="Kundenwachstum"
                    value={276}
                    target={300}
                    icon={UserPlus}
                    color="blue"
                    dark={dark}
                    trend={8.3}
                    subtitle="+23 neue Kunden"
                    comparison="letzter Monat"
                />
                <KPICard
                    title="Auslastung"
                    value={87}
                    target={100}
                    icon={Activity}
                    color="purple"
                    dark={dark}
                    trend={-2.1}
                    subtitle="Sehr gut ausgelastet"
                    comparison="letzte Woche"
                />
                <KPICard
                    title="Kundenzufriedenheit"
                    value={4.9}
                    target={5.0}
                    icon={Star}
                    color="yellow"
                    dark={dark}
                    trend={2.1}
                    subtitle="189 Bewertungen"
                    comparison="letztes Quartal"
                />
            </div>

            {/* Revenue Chart */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <GlassCard dark={dark}>
                    <div className="flex items-center justify-between mb-6">
                        <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>
                            Umsatzentwicklung
                        </h3>
                        <div className="flex items-center space-x-2">
                            <button className={`px-3 py-1 text-xs rounded-lg ${
                                dark ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-700'
                            }`}>
                                Details
                            </button>
                        </div>
                    </div>
                    <AdvancedChart
                        type="line"
                        data={[18000, 19500, 21000, 20500, 22100, 24580, 23900, 25200, 26100, 27300, 28900, 30200]}
                        labels={['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']}
                        dark={dark}
                        height={250}
                    />
                </GlassCard>

                <GlassCard dark={dark}>
                    <div className="flex items-center justify-between mb-6">
                        <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>
                            Service Performance
                        </h3>
                        <div className="flex items-center space-x-2">
                            <button className={`px-3 py-1 text-xs rounded-lg ${
                                dark ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-700'
                            }`}>
                                Filter
                            </button>
                        </div>
                    </div>
                    <AdvancedChart
                        type="bar"
                        data={[156, 243, 89, 124, 78, 95]}
                        labels={['Schnitt', 'Färben', 'Styling', 'Bart', 'Wellen', 'Special']}
                        dark={dark}
                        height={250}
                    />
                </GlassCard>
            </div>

            {/* Team Performance & Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Team Performance */}
                <GlassCard dark={dark} className="lg:col-span-2">
                    <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'} mb-4`}>
                        Team Performance
                    </h3>
                    <div className="space-y-3">
                        {[
                            { name: 'Max Mustermann', role: 'Inhaber', performance: 94, revenue: 8450, customers: 42 },
                            { name: 'Sarah Schmidt', role: 'Stylistin', performance: 88, revenue: 6230, customers: 31 },
                            { name: 'Julia Weber', role: 'Coloristin', performance: 91, revenue: 7100, customers: 28 }
                        ].map((member, idx) => (
                            <div key={idx} className={`p-4 rounded-xl ${
                                dark ? 'bg-white/5' : 'bg-gray-50'
                            }`}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <img
                                            src={`https://ui-avatars.com/api/?name=${member.name}&background=3b82f6&color=fff`}
                                            alt={member.name}
                                            className="w-10 h-10 rounded-full"
                                        />
                                        <div>
                                            <p className={`font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                                {member.name}
                                            </p>
                                            <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                                {member.role}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-6">
                                        <div className="text-center">
                                            <p className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                                Umsatz
                                            </p>
                                            <p className={`font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                                €{member.revenue}
                                            </p>
                                        </div>
                                        <div className="text-center">
                                            <p className={`text-xs ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                                                Kunden
                                            </p>
                                            <p className={`font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>
                                                {member.customers}
                                            </p>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className={`w-24 h-2 ${dark ? 'bg-white/10' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                                                <div
                                                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                                    style={{ width: `${member.performance}%` }}
                                                />
                                            </div>
                                            <span className={`text-sm font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>
                                                {member.performance}%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </GlassCard>

                {/* Recent Activity */}
                <GlassCard dark={dark}>
                    <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'} mb-4`}>
                        Letzte Aktivitäten
                    </h3>
                    <div className="space-y-3">
                        {[
                            { icon: Calendar, text: 'Neuer Termin gebucht', time: 'vor 5 Min', color: 'blue' },
                            { icon: Star, text: '5-Sterne Bewertung', time: 'vor 12 Min', color: 'yellow' },
                            { icon: DollarSign, text: 'Zahlung €120 erhalten', time: 'vor 23 Min', color: 'green' },
                            { icon: UserPlus, text: 'Neuer Kunde registriert', time: 'vor 45 Min', color: 'purple' },
                            { icon: MessageSquare, text: 'SMS Erinnerung gesendet', time: 'vor 1 Std', color: 'orange' }
                        ].map((activity, idx) => (
                            <div key={idx} className={`flex items-start space-x-3 p-3 rounded-lg ${
                                dark ? 'hover:bg-white/5' : 'hover:bg-gray-50'
                            } transition-colors cursor-pointer`}>
                                <div className={`p-2 rounded-lg ${
                                    activity.color === 'blue' ? 'bg-blue-500/20 text-blue-500' :
                                        activity.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-500' :
                                            activity.color === 'green' ? 'bg-green-500/20 text-green-500' :
                                                activity.color === 'purple' ? 'bg-purple-500/20 text-purple-500' :
                                                    'bg-orange-500/20 text-orange-500'
                                }`}>
                                    <activity.icon className="w-4 h-4" />
                                </div>
                                <div className="flex-1">
                                    <p className={`text-sm ${dark ? 'text-white' : 'text-gray-900'}`}>
                                        {activity.text}
                                    </p>
                                    <p className={`text-xs ${dark ? 'text-white/40' : 'text-gray-500'}`}>
                                        {activity.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </GlassCard>
            </div>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                    { icon: Calendar, label: 'Termin buchen', color: 'blue' },
                    { icon: UserPlus, label: 'Kunde hinzufügen', color: 'green' },
                    { icon: Receipt, label: 'Rechnung erstellen', color: 'purple' },
                    { icon: MessageSquare, label: 'SMS senden', color: 'orange' },
                    { icon: Package, label: 'Bestellung', color: 'pink' },
                    { icon: BarChart3, label: 'Bericht', color: 'teal' },
                    { icon: Megaphone, label: 'Kampagne', color: 'red' },
                    { icon: Settings, label: 'Einstellungen', color: 'gray' }
                ].map((action, idx) => (
                    <button
                        key={idx}
                        className={`
                            p-4 rounded-xl flex flex-col items-center justify-center space-y-2
                            ${dark ? 'bg-white/5 hover:bg-white/10 border border-white/10' : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'}
                            transition-all duration-200 hover:scale-105 active:scale-95
                        `}
                    >
                        <action.icon className={`w-6 h-6 ${
                            action.color === 'blue' ? 'text-blue-500' :
                                action.color === 'green' ? 'text-green-500' :
                                    action.color === 'purple' ? 'text-purple-500' :
                                        action.color === 'orange' ? 'text-orange-500' :
                                            action.color === 'pink' ? 'text-pink-500' :
                                                action.color === 'teal' ? 'text-teal-500' :
                                                    action.color === 'red' ? 'text-red-500' :
                                                        'text-gray-500'
                        }`} />
                        <span className={`text-xs ${dark ? 'text-white/70' : 'text-gray-700'}`}>
                            {action.label}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};

// Advanced Calendar Component
const AppointmentCalendar = ({ dark }) => {
    const [viewMode, setViewMode] = useState('week');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showAddModal, setShowAddModal] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState(null);

    const appointments = [
        { id: 1, date: '2024-01-15', time: '09:00', duration: 2, client: 'Anna Müller', service: 'Färben & Schnitt', stylist: 'Max', color: 'blue' },
        { id: 2, date: '2024-01-15', time: '11:30', duration: 1, client: 'Max Schmidt', service: 'Herrenschnitt', stylist: 'Sarah', color: 'green' },
        { id: 3, date: '2024-01-15', time: '14:00', duration: 1.5, client: 'Julia Weber', service: 'Styling', stylist: 'Julia', color: 'purple' },
        { id: 4, date: '2024-01-15', time: '16:00', duration: 1, client: 'Thomas Klein', service: 'Bartpflege', stylist: 'Max', color: 'orange' }
    ];

    const timeSlots = Array.from({ length: 22 }, (_, i) => {
        const hour = Math.floor(i / 2) + 9;
        const minute = i % 2 === 0 ? '00' : '30';
        return `${hour}:${minute}`;
    });

    const weekDays = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];

    return (
        <div className="space-y-4">
            {/* Calendar Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <h2 className={`text-xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                        {selectedDate.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}
                    </h2>
                    <div className="flex items-center space-x-1">
                        <button className={`p-2 rounded-lg ${
                            dark ? 'hover:bg-white/10' : 'hover:bg-gray-100'
                        }`}>
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button className={`px-3 py-1 rounded-lg text-sm ${
                            dark ? 'bg-white/10' : 'bg-gray-100'
                        }`}>
                            Heute
                        </button>
                        <button className={`p-2 rounded-lg ${
                            dark ? 'hover:bg-white/10' : 'hover:bg-gray-100'
                        }`}>
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                <div className="flex items-center space-x-3">
                    <div className={`flex p-1 ${dark ? 'bg-white/10' : 'bg-gray-100'} rounded-lg`}>
                        {['day', 'week', 'month'].map((mode) => (
                            <button
                                key={mode}
                                onClick={() => setViewMode(mode)}
                                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                                    viewMode === mode
                                        ? dark ? 'bg-white text-black' : 'bg-white text-gray-900 shadow-sm'
                                        : dark ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                {mode === 'day' ? 'Tag' : mode === 'week' ? 'Woche' : 'Monat'}
                            </button>
                        ))}
                    </div>
                    <button