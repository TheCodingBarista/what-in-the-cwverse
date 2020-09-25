
shows = Show.create([
    {title: 'Arrow', description: "Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea. He returns five years later a changed man, determined to clean up the city as a hooded vigilante armed with a bow."},
    {title: 'The Flash', description: "After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only 'meta-human' who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won't be long before the world learns what Barry Allen has become...The Flash."},
    {title: 'Supergirl', description: "Twenty-four-year-old Kara Zor-El, who was taken in by the Danvers family when she was 13 after being sent away from Krypton, must learn to embrace her powers after previously hiding them. The Danvers teach her to be careful with her powers, until she has to reveal them during an unexpected disaster, setting her on her journey of heroism."}
])

Character.create([
    {name: 'Oliver Queen', show: shows.first, alias: "Green Arrow", known_for: ["archery"]},
    {name: 'Felicity Smoak', show: shows.first, known_for: ["intelligence", "technology"]},
    {name: 'John Diggle', show: shows.first, known_for: "combat"},

    {name: 'Barry Allen', show: shows.second, alias: "The Flash", known_for: ["super speed"]},
    {name: 'Cisco Ramon', show: shows.second, alias: "Vibe", known_for: ["intelligence", "technology", "vibrational energy manipulation"]},
    {name: 'Caitlin Snow', show: shows.second, alias: "Killer Frost", known_for: ["intelligence", "medicine", "ice powers"]}
])

