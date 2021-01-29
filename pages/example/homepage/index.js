import React, { useState, useEffect } from 'react'
import { useAmp } from 'next/amp'
import styles from './index.module.css'
import Link from 'next/link'
import Head from 'next/head'
export const config = { amp: 'hybrid' }
const ExExample = (props) => {
    const isAmp = useAmp()

    return (
        <section className={styles.ex_homepage_container}>
            <Head>

                <title>Minecraft Hacks</title>
                <meta name="title" content="This page is all about minecraft" />
                <meta name="description" content="For players who do not know how to begin their Minecraft journey," />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://metatags.io/" />
                <meta property="og:title" content="This page is all about minecraft" />
                <meta property="og:description" content="For players who do not know how to begin their Minecraft journey," />
                <meta property="og:image" content={props.photo} />


                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://metatags.io/" />
                <meta property="twitter:title" content="This page is all about minecraft" />
                <meta property="twitter:description" content="For players who do not know how to begin their Minecraft journey," />
                <meta property="twitter:image" content={props.photo} />
            </Head>
            <div className={styles.ex_header}>
                <h1 className={styles.ex_title}>Welcome to My Web</h1>
                <p>This is my website ! <br></br>
                Hope you find something useful !
                </p>
                <nav className={styles.ex_nav}>
                    <ul className={styles.ex_list}>
                        <li><Link href='/example/homepage'>Home</Link></li>
                        <li><Link href='/example/aboutpage'>About</Link></li>
                        <li><Link href='/example/eventpage'>Events</Link></li>
                        <li><Link href='/example/infopage'>Info</Link></li>
                    </ul>
                </nav>
            </div>

            <div className={styles.home_container}>
                <h2>Introduction</h2>
                <hr></hr>
                <p>
                    Tutorial
                    For players who do not know how to begin their Minecraft journey, this beginner's guide provides advice to get your first game off to a good start, and in particular what to do in your first day, so as to comfortably survive through the following night. There are three sections: The first one discusses the interface and controls, the second provides an overview with goals, and the third provides step-by-step instructions. Within the game, while following this guide you also receive announcements of several achievements; you can see that page for full details of achievements, but for now you can safely ignore them. You may also acquire some experience; again, ignore this for now, as it is not useful until later in the game.
                    Before reading this page, it's expected for players to have already bought and downloaded the game. You must create a new world before starting the tutorial. For Java Edition, the page Tutorials/Menu screen can help with that. For your first game, you should probably select Easy or Normal difficulty; if you usually have a lot of trouble finding your feet in new games, you may want to consider starting in peaceful mode. A new player may also wish to enable the Bonus Chest option, which gives you a few resources to start off with, but this tutorial assumes you do not have a bonus chest.
                    It is entirely possible for your character to die in this game, but that doesn't end the game — indeed, it's mostly an inconvenience. If you take enough damage to die, your possessions fall where you died, and your character respawns elsewhere. By default, you respawn at a random spot within 20 blocks of the "world spawn", exactly as you did when starting the game. Using a bed lets you pick a specific spot to respawn (this is an important step, and beds are mentioned several times in this guide). Once you respawn, you have 5 minutes to get back to where you died, to retrieve your items before they disappear. Unfortunately, this isn't always an option: If you fell into lava, at least some of your items probably burned up in the lava, and if your death site is still guarded by the monster that killed you or your items have fallen into the depths you might not be able to retrieve them. See the page on Death for more information.
                </p>
            </div>

            <div className={styles.home_content}>
                <div>
                    <ul>
                        <li className={styles.list_space}>
                            Control and interface
                            <ul>
                                <li>Controls</li>
                                <li>Keyboard</li>
                                <li>Mouse</li>
                                <li>Movements</li>
                            </ul>
                        </li>
                        <li className={styles.list_space}>
                            Overview
                            <ul>
                                <li>Life Cycle</li>
                                <li>Day time</li>
                                <li>Night time</li>
                                <li>Shelter</li>
                                <li>Foods</li>
                            </ul>
                        </li>
                        <li className={styles.list_space}>
                            Play style
                            <ul>
                                <li>Getting started</li>
                                <li>Craftings</li>
                                <li>Recepis</li>
                                <li>Biomes</li>
                                <li>Dawn</li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>

            <div className={styles.home_container}>
                <h2>Controls and interfaces</h2>
                <hr></hr>
                <p>
                    Minecraft is a sandbox game, in which your avatar wanders around in a world, collecting resources and using items. You need to master the control system; if you are having trouble with it, you may want to start with a Peaceful Mode world to practice. Your world is made of blocks, mostly cubical. These blocks represent objects, but their size also makes a standard measure of distance; this and many other pages talk in terms of, e.g., "five blocks away" (officially, each block is a one-meter cube). Your character can stand within a single block's space, and it stands a little less than two blocks tall. Time passes within this world; a game day passes in 20 real-world minutes. Nighttime is much more dangerous than daytime; the game starts at dawn, and you have 10 minutes of game time before nightfall. The primary purpose of this guide is to let you "find your feet" and get basic equipment and shelter before night comes.

                    Your control system depends on your platform. This article mostly assumes you are playing on Java Edition. Most of the controls can be changed in the game's option menu, but this and other articles often refer to them by their default keys. In Java Edition, when you start the game for the first time, a short in-game tutorial appears to explain the basics of how to move and look around. The Controls page gives you a complete overview of all the controls.

                    When moving around the world and dealing with blocks and creatures in the world, there are four basic operations, discussed below:

                    Movement in four directions, as well as looking upward and downward, jumping, and sneaking. Variations include sprinting and swimming.
                    As you move around, you occasionally see or produce items floating "loose" in the world. Interacting with those is simple: when you move close enough to them they fly toward you and you automatically take them into your inventory (unless your inventory is full, see below). At the start of a game, just pick up every loose item you encounter, you may eventually find uses for them, and it takes a little while to fill up your inventory.
                    "Mining" or breaking blocks, which is the usual way to collect resources from the landscape. In most cases, a broken block drops one or more loose items. Attacking mobile creatures ("mobs") uses the same controls as breaking blocks, and they also drop loose items when killed. In general, attacking requires brief taps of the relevant control, while breaking blocks requires holding down the same control. Some blocks, such as tall grass, breaks instantly.
                    "Using" items or blocks. This is more complex, since it can apply to blocks in the world or to tools in your hand. The same controls are used for some interactions with creatures (such as shearing sheep or trading with villagers), but this is a matter for later days in the game.
                    Your character can also work with items in a GUI, especially managing your own inventory, crafting new items, and working with storage items such as chests. This uses the mouse and sometimes the keyboard differently, while you are focused on your inventory and/or a crafting task rather than the world around you.
                    </p>
            </div>

            <div className={styles.home_container}>
                <h2>Movements</h2>
                <hr></hr>
                <p>
                    Moving the mouse (or trackball, for simplicity we refer to the mouse) forward and back causes your character to look upward and downward. Moving the mouse left and right causes your character to not just look, but turn in that direction, changing which direction is "forward". The keys AWSD moves your character left, forward, backward and right; note that none of these make your character turn around or even look in the direction you're moving. Be careful about moving to the sides or backward without knowing what's there, as you can fall off cliffs or otherwise run into danger! Looking around also lets you pick out individual blocks or creatures to interact with, see below. If you walk off the edge of a block to where there is no solid block, you fall. If you fall more than three blocks (and not into water) you take damage depending on the distance fallen. If you fall into water over your head, you can eventually drown unless you swim back to the surface, and if you fall into lava, you quickly burn to death!

                    Double-tapping and holding the "forward" key (again, W by default), or pressing Ctrl, while moving forward, causes you to sprint, running faster (but this consumes food more quickly). If you fall into water, the same keys let you swim around.

                    The Spacebar lets you jump; you can jump one-and-a-quarter blocks high, and can also jump across a two block gap in the ground (four blocks if sprinting). By default, walking into a one-block-higher edge automatically make you jump up to the new level, but there are still many situations where you need to jump upward. If you turn off Auto-Jump you need to explicitly jump up to higher terrain. If you fall into water (or lava!), this same key is how you move upward toward the surface, and jump out onto the shore.

                    The ⇧ Left Shift key makes you "sneak". While sneaking, your viewpoint get a little lower, and you move more slowly. The benefit of sneaking is that you cannot fall off the edge of a block; in fact, you can sneak slightly over the edge of a block, to look at and interact with the side of the block you're standing on.

                    It is also possible for your character to crawl, but this is more complex; see the article "Crawling" for full details.

                    Clicking Q,allows you to throw items,sort of like when you die.Picking the item up is as simple as walking near or over the item.In multiplayer,this is useful for trading with other players or in both just throwing away.

                 </p>
            </div>

            <div className={styles.home_container}>
                <h2>Items </h2>
                <hr></hr>
                <p>
                    From the start of the game you can see nine special inventory slots, called your "hotbar", but you also have more slots which are normally hidden. As you pick up items, the first few appear your hotbar slots, but once those are full, they go into the 27 slots of your main inventory. At any given time, one of your hotbar slots is "selected", and the item in this slot is considered to be "in hand". (You can see the item in hand in front of you.) You can press keys 1 through 9 (or use a mouse-wheel if you have one) to choose which hotbar slot is active, thus you can quickly switch among up to 9 handy tools or other items.

                    Multiple items of the same type usually "stack", showing a number indicating how many of them there are. Most items stack up to 64; other items stack only to 16 (the first of these likely to be encountered are chicken eggs). Tools and armor are more individual, and do not stack at all. When you use or place items from a stack, you generally use one item at a time, counting down the stack.

                    You can also "drop" the item in hand (or one from a stack), which tosses it two or three blocks away. By default an item is dropped with the Q key. Pro tip: On a standard keyboard, the Q key is right next to to the movement keys, making it very easy to accidentally throw away the item you're using. Many players prefer to use the Settings menu to rebind the "drop" function to another key, such as O or K.

                    To get at the rest of your slots (and the beginnings of crafting), press E to open your personal inventory. This is your first GUI ("Graphical User Interface") and shares many features with the other GUIs that you'll encounter later:

                    Your cursor no longer controls your view. Instead you use it to pick up and drag items among various slots. Left-click picks up or drop an entire stack; right-click picks up half of a stack or drop one item at a time. There are more complex options, see the "Inventory" article linked above for details.
                    Note that opening a GUI does not pause the game, but while you are attending to the inventory you can only see a little of the world around you. Be careful about fooling with your inventory while monsters are around! On the Java Edition, opening any GUI also allows you to switch away from Minecraft and to another desktop window, without pausing the game.
                    Looking to the right, you can see an image of your inventory screen. There is a little image of your character, showing their current appearance. Left of that image are four slots for any armor you are wearing -- these can each contain only an a appropriate armor piece, for helmet, chest, legs, or feet. (This guide does not discuss armor.) Just to the right is a slot marked with a shield, which is your "offhand slot". This one can actually contain almost any item, but most common is indeed a shield (which you also probably won't get on your first day). If you are wearing a shield, you can use it with the same "use" key as for other items -- in general, you can "use" any item in your offhand, as long as neither the item in your main hand nor the block you are looking at has a "use" feature.

                    Below these are the 27 slots of your main inventory. You can drag items around from these slots to your hotbar and back, armor pieces can be moved to and from their armor slots, and items can be dragged to the personal crafting grid, about which more below. Dragging items completely out of the GUI's rectangle and releasing them there drops the items into the world much like the Q key (or whatever you rebound that to), but it is easier to drop a whole stack this way.

The hotbar and main inventory adds up to 36 slots for general storage, which is the limit for how much a player can carry around and transport on their person. There is no sense of "weight" or encumbrance for items; a player moves at normal speed regardless of how full their inventory is, or what particular items they are carrying. (It is a running joke that a player can bounce around while carrying what "should be" hundreds of tons of stone and/or metal.) If your inventory becomes completely full, you cannot pick up new items, although you may still be able to pick up more of any stackable items that you already have. </p>
            </div>

        </section>
    )
}

export default ExExample;


export const getServerSideProps = async () => {
    let photo = null;
    await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(() => {
            photo = 'https://media.altchar.com/prod/images/940_530/gm-a0303008-7e21-4e22-b950-50595d7bdb58-minecraft.jpeg'
        })


    return {
        props: {
            photo,
        },
    };
};