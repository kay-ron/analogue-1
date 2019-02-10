# Analogue-1

**Analogue-1** (or **A1**) is an in-development VoIP (voice over Internet Protocl) and instant messaging application. It will provide instant chat services, as well as voice and video calling through a completely distributed and serverless P2P network.

# A Brief History
Originally, the project was called Gomennasai, the Japanese equivalent to "sorry" in general English. Although I cannot remember the details, it was an overtly ambitious project back when I had no code experience so it safe to say that it was shut down almost immediately.

The project then restarted under the name Fennec. That was also shut down for roughly the same reasons.

Until it finally reached the third regeneration: Analogue-1. It used to be called **Analogue-0C/A0C** before I decided to simplify/rename it to A1.

## Why Electron?
I originally lost faith because of the stress of coding unique versions for *every single operating system*. Every computer programmer seems to know that every operating system is coded in its original native code (Windows is coded mainly with C#, which forms part of the .NET framework); if you aren't a programmer, the more you know!

On top of that, programming is generally unforgiving to new developers and while Q&A sites such as Stack Overflow do help and I'm greatful for their existence... Let me put it this way; if you're trying to develop something that requires some mathematical/logic formulas such as the XOR metric (Kademlia), you're better off dead. To name an example.

Some coders do not condone the use of Javascript — and, to an extent, Electron — for its purpose of web-based programming and not desktop-based. Even more so, Electron uses a form of Chromium (the software framework that builds Google's Chrome browser) that is slightly outdated in terms of releases; this is often several units behind the current release. Also, it is a memory hog and there's no denying it.

I chose Electron because of its ease-of-use, and its compatibility with Windows, macOS and Linux. This way, I don't have to spend my life writing three different versions when one framework could easily do that for me.

## Why create A1?
If you haven't been tying yourself up in the information sector of the politi-social debate (and especially Alex Jones' deplatforming of his infamous *InfoWars*), it seems as though many media companies are manipulating information, apparently violating their Terms of Service when moderating their product, and might be slowly dominating the Internet as well as controlling users through morally-good practices such as "philanthropy".

This isn't new; regardless of your stance politically, factually, or socially — if this were to be true, then this may as well be troubling and even scary.

Yes, we already have software that A1 is trying to be: Matrix, Tox, Riot (which is basically Matrix), Orbit, Signal, WASTE... Yet, the best way to sum up each of these is you might as well be sacrificing traditional means of communication for a more niche alternative. Not to say that they do not excel at what they do.

I am creating Analogue-1 as a more "mainstream" solution to this problem. While definitely being as secure as possible, it should be more of a simple and easy-to-use VoIP application that doesn't lose the core functionality and simplicity of Facebook Messenger, Skype, Discord, TeamSpeak; name it, its likely similar.

# Features
A1 will have a minimalist UI that will be somewhat like a CLI (although, in reality, much like Hundred Rabbits). It will be separated into a simple "hidden" sidebar with active tabs, and the main window comprising the opened tab.

Tabs will include:
- Current chat sessions
- Profiles
- Voice/video chats
- Settings

## Communication
P2P is not easy. I originally thought about modifying the BitTorrent protocol to connect to each other — then I tried only its distributed hash table, Mainline (based off of Kademlia). In a nutshell, too complicated and unnecessary for what I only need; P2P connection, with local database caching.

[Riven]() is a flow-based protocol that allows for serverless communication between nodes. A1 will use this with some modification for message communication and node discovery. WebRTC will be used in between for video/voice calling; modifications will be made to ensure that the API will sense whether the node is IPv6 or v4.

For sending files, a modified BitTorrent protocol will be used to establish using Riven instead of Mainline.

### So Analogue-1 isn't truly P2P?
Yes and no. Yes, it seems that as long as you are IPv6 or are not NATd behind a firewall if you are on v4, then A1 can be truly P2P.

If not, then communication between nodes will happen between public STUN and TURN servers — so no.

## Notifications
I have always been inspired by Deaf culture and how despite their challenges, that they have managed to find alternate ways of living. In that aspect, all notifications will be visual and will emit no sound due to the above, as well as the fact that multiple notifications simultaneously does not sound good (take a look at Discord for example).

## Profile pictures and verification
There are no plans to allow profile pictures out of the sake of the limits of P2P networking, as well as personal preference. Instead, each user will be identified by an abstract gradient-like color scheme. To further solve the issue of verification between anonymous users, a P2P identity system will be implemented — although, at this point, the only true option is to sign in-person.



# Status
## Pre-Alpha: December 2018 - present
A1 is still being written, so the code won't currently work if you download and try to test it. However, 

# The Plan
A1's alpha release will be released for Microsoft Windows and Linux sometime in 2019, if I can find it. As I do not have a Mac, or any Mac that runs its proprietary macOS software, I will be unable to test the program for that operating system (if any Mac developer is interested in working with me).

And yes, this app will be released under the Expat/X11 (MIT) License.

## Discrepancy
I am not a professional developer. I know Javascript through constantly searching the Internet, taking breaks, and then finally getting the rules. I still have trouble reading some code because I haven't worked on large-scale projects, or any at all. I'm very much a visual learner, and I do not plan to contribute to projects any time soon.

# Contact
So if you're cool with all of the above., and want to help me create a new kind of chat app, come talk to me!

[Here is the link to A1's Gitter.](https://gitter.im/A_1/SQ1)