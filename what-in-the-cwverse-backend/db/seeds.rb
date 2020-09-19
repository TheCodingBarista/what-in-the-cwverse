# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
shows = Show.create([
    {title: 'Arrow'},
    {title: 'The Flash'},
    {title: 'Supergirl'}
])

Character.create([
    {name: 'Oliver Queen', show: shows.first, alias: "Green Arrow", known_for: ["archery"]},
    {name: 'Felicity Smoak', show: shows.first, known_for: ["intelligence", "technology"]},
    {name: 'John Diggle', show: shows.first, known_for: "combat"},

    {name: 'Barry Allen', show: shows.second, alias: "The Flash", known_for: ["super speed"]},
    {name: 'Cisco Ramon', show: shows.second, alias: "Vibe", known_for: ["intelligence", "technology", "vibrational energy manipulation"]},
    {name: 'Caitlin Snow', show: shows.second, alias: "Killer Frost", known_for: ["intelligence", "medicine", "ice powers"]}
])