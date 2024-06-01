---
sidebar_position: 1
title: 1. Layer2
tags:
  - Basic
  - Layer 2
  - Ethereum
---

# 以太坊扩展的路径

以太坊 2.0 将主要通过引入分片（sharding）机制来解决部分与扩展性有关的问题。分片被认为是第一层（Layer 1 scaling）解决方案。它有助于扩展区块链本身。然而，为了实现更高水平的可扩展性，我们需要有第 2 层（Layer 2 scaling）的扩展解决方案。所谓二层，就是将一部分资金存储在主链智能合约里，在保证足够安全的前提下，把一部分交易放到主链之外进行，好像链下多出来一层网络。

## 主要的第二层解决方案

- 侧链 Sidechains
- 状态通道 Channels
- 卷叠 Rollups
  - Optimistic Rollup 乐观卷叠
  - ZK Rollup 零知卷叠

### 侧链 Sidechains

“侧链”是独立的区块链，与以太坊主网平行，独立运作。因此，他们被认为是不太安全的。侧链最强的玩家是 Polygon。

### 状态通道

状态通道是一种执行交易和其他状态更新的“链下”技术。状态通道允许用户进行多次脱链交易，而仅向以太坊网络提交两次交易（一次在打开时提交，一次在关闭通道时提交）。比特币的闪电网络和以太坊的雷电网络为代表。

### 卷叠 Rollups

将计算转移到链下，只将最少的事务数据（摘要数据）存储在链上。从这个基本意义上来讲，Rollup 就是以太坊的草稿纸。Rollups 已经被 V 神钦点为最可行的 L2 扩容方案。短期来看 Optimistic Rollup 由于较好的通用性会受到开发者的青睐；但从长期来看，随着零知识证明虚拟机的演进，ZK Rollup 会在通用性上不断提高。

#### Optimistic Rollup：Arbitrum 和 Optimism

Optimistic Rollups 使用的是欺诈证明（fraud proofs），对交易有效性采取“除非被证明有罪，否则无罪”的方法。目前有两个团队 Optimism 和 Arbitrum 在研究 Optimistic Rollups 方向。

#### Optimism 和 Arbitrum 的不同点

主要体现在争议的解决上。Optimism 把整个有问题的交易都通过 EVM 运行，速度更快。Arbitrum 将争议减少到一笔交易中的一个步骤，交易成本更便宜。目前从锁仓量和协议数两个维度看，Optimism 都要落后于 Arbitrum。
