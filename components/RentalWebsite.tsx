"use client"
import React, { useState } from 'react';
import { Search, Home, MapPin, DollarSign, BedDouble, Bath, Square, SlidersHorizontal, Heart, HeartOff } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';


const RentalWebsite = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedType, setSelectedType] = useState('All');
  const [selectedBedrooms, setSelectedBedrooms] = useState('Any');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState('price-asc');

  // Sample property data
  const properties = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      price: 2500,
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      location: "123 Main St, Downtown",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxBvzLeSmGwLdDGXwow-bAXfafBTIQ3vwRZw&s",
      type: "Apartment",
      amenities: ["Parking", "Gym", "Pool"]
    },
    {
      id: 2,
      title: "Suburban Family Home",
      price: 3200,
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 2000,
      location: "456 Oak Ave, Suburbs",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiYxFWK5C_NSMPmHULePfpH-CEkmEvIfTWiA&s",
      type: "House",
      amenities: ["Garage", "Garden", "Fireplace"]
    },
    {
      id: 3,
      title: "Luxury Waterfront Condo",
      price: 4500,
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1500,
      location: "789 Beach Blvd, Waterfront",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVYhrwO8n7llyUosXDM79VDsamtL_wcCgPhA&s",
      type: "Condo",
      amenities: ["Balcony", "Security", "Ocean View"]
    }
  ];

  // Filter and sort properties
  const filteredProperties = properties
    .filter(property => 
      property.price >= priceRange[0] &&
      property.price <= priceRange[1] &&
      (selectedType === 'All' || property.type === selectedType) &&
      (selectedBedrooms === 'Any' || property.bedrooms === parseInt(selectedBedrooms)) &&
      (property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       property.location.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'beds-asc':
          return a.bedrooms - b.bedrooms;
        case 'beds-desc':
          return b.bedrooms - a.bedrooms;
        default:
          return 0;
      }
    });

  const toggleFavorite = (propertyId: number) => {
    setFavorites(prev => 
      prev.includes(propertyId)
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Home className="h-6 w-6 text-purple-600" />
            <h1 className="text-xl font-bold text-gray-900">RentHome</h1>
          </div>
          <nav className="space-x-4">
            <button className="text-gray-600 hover:text-gray-900">List Property</button>
            <button className="text-gray-600 hover:text-gray-900">Sign In</button>
            <button 
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="h-5 w-5 inline-block mr-1" />
              Filters
            </button>
          </nav>
        </div>
      </header>

      {/* Search Section */}
      <div className="bg-purple-600 py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            Find Your Perfect Rental Home
          </h2>
          <div className="flex bg-white rounded-lg shadow-lg p-2">
            <Search className="h-6 w-6 text-gray-400 mx-2" />
            <input
              type="text"
              placeholder="Enter an address, neighborhood, city, or ZIP code"
              className="w-full p-2 outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      {showFilters && (
        <div className="bg-white shadow-md p-4 max-w-7xl mx-auto mt-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Price Range</label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="w-full p-2 border rounded"
                  placeholder="Min"
                />
                <span>-</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full p-2 border rounded"
                  placeholder="Max"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Property Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="All">All Types</option>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Condo">Condo</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Bedrooms</label>
              <select
                value={selectedBedrooms}
                onChange={(e) => setSelectedBedrooms(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="Any">Any</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="beds-asc">Bedrooms: Low to High</option>
                <option value="beds-desc">Bedrooms: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Property Listings */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
              <Image
               src={property.image}
               alt={property.title}
               width={500}  // adjust as needed
               height={300} // adjust as needed
               className="w-full h-48 object-cover"
              />

                <button
                  onClick={() => toggleFavorite(property.id)}
                  className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md"
                >
                  {favorites.includes(property.id) ? (
                    <Heart className="h-5 w-5 text-red-500 fill-current" />
                  ) : (
                    <HeartOff className="h-5 w-5 text-gray-500" />
                  )}
                </button>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{property.title}</CardTitle>
                <div className="flex items-center text-gray-500 space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{property.location}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center text-purple-600">
                    <DollarSign className="h-5 w-5" />
                    <span className="text-xl font-bold">{property.price}</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <span className="text-gray-500">{property.type}</span>
                </div>
                <div className="flex justify-between text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <BedDouble className="h-4 w-4" />
                    <span>{property.bedrooms} beds</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bath className="h-4 w-4" />
                    <span>{property.bathrooms} baths</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Square className="h-4 w-4" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {property.amenities.map((amenity, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                      {amenity}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RentalWebsite;