# Starweb Engine

A lightweight 2D game engine for the browser, built with TypeScript and the Web Audio / Canvas APIs.

[![CI](https://github.com/starweb-libs/engine/actions/workflows/ci.yml/badge.svg)](https://github.com/starweb-libs/engine/actions/workflows/ci.yml)
[![Library Version](https://img.shields.io/npm/v/@starweb-libs/engine)](https://www.npmjs.com/package/@starweb-libs/engine)
[![License: MIT](https://img.shields.io/badge/License-MIT-green)](./LICENSE)

## Tech Stack
<p align="left">
  <img height="35" src="https://img.shields.io/badge/TypeScript-%23007ACC?logo=typescript&logoColor=white&style=for-the-badge"/>
  <img height="35" src="https://img.shields.io/badge/Web%20Audio%20API-black?logo=webaudio&logoColor=white&style=for-the-badge"/>
  <img height="35" src="https://img.shields.io/badge/Canvas%20API-black?logo=html5&logoColor=white&style=for-the-badge"/>
</p>

## Modules
| Module           | Description                                       |
| ------           | -----------                                       |
| `canvas`         | Fullscreen canvas setup with resize handling      |
| `update`         | Fixed or variable timestep game loop              |
| `assets`         | Image loading and tinting                         |
| `input/keyboard` | Per-frame keyboard state                          |
| `input/pointer`  | Per-frame pointer/mouse state with canvas scaling |
| `validate`       | JSON validation helpers and error collector       |
| `bootstrap`      | Canvas, keyboard, pointer setup in one call       |

## Installation
```bash
npm install github:starweb-libs/engine
```

## License
MIT License - see [LICENSE](./LICENSE) for details.
