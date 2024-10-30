# loadFlag

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `loadFlag`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 31 00`
- **Assembly Address in Memory** : `0x894bfc4`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 0a 31 00```

Which is interpreted as:

```c
loadFlag()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894bfc4(undefined4 param_1,undefined4 param_2)

{
  int iVar1;
  int iVar2;
  undefined4 uVar3;
  undefined4 uVar4;
  
  iVar1 = FUN_08877b6c(1);
  iVar1 = FUN_08836f88(iVar1 + 0x10);
  iVar2 = FUN_08877b6c(1);
  uVar3 = FUN_08836f90(iVar2 + 0x10);
  iVar2 = Save::Get_Save_BaseAddr(1);
  iVar2 = *(int *)(iVar2 + 0x50);
  if ((int)((uint)*(byte *)(*(int *)(iVar1 + 4) + 0x1cd) << 0x1a) < 0) {
    *(byte *)(iVar2 + 0x2b1d5) = *(byte *)(iVar2 + 0x2b1d5) | 0x20;
  }
  else {
    *(byte *)(iVar2 + 0x2b1d5) = *(byte *)(iVar2 + 0x2b1d5) & 0xdf;
  }
  if ((int)((uint)*(byte *)(*(int *)(iVar1 + 4) + 0x1cd) << 0x19) < 0) {
    *(byte *)(iVar2 + 0x2b1d5) = *(byte *)(iVar2 + 0x2b1d5) | 0x40;
  }
  else {
    *(byte *)(iVar2 + 0x2b1d5) = *(byte *)(iVar2 + 0x2b1d5) & 0xbf;
  }
  if ((int)((uint)*(byte *)(*(int *)(iVar1 + 4) + 0x1cd) << 0x18) < 0) {
    *(byte *)(iVar2 + 0x2b1d5) = *(byte *)(iVar2 + 0x2b1d5) | 0x80;
  }
  else {
    *(byte *)(iVar2 + 0x2b1d5) = *(byte *)(iVar2 + 0x2b1d5) & 0x7f;
  }
  if ((*(byte *)(*(int *)(iVar1 + 4) + 0x1ce) & 1) == 0) {
    *(byte *)(iVar2 + 0x2b1d6) = *(byte *)(iVar2 + 0x2b1d6) & 0xfe;
  }
  else {
    *(byte *)(iVar2 + 0x2b1d6) = *(byte *)(iVar2 + 0x2b1d6) | 1;
  }
  if ((int)((uint)*(byte *)(*(int *)(iVar1 + 4) + 0x1ce) << 0x1e) < 0) {
    *(byte *)(iVar2 + 0x2b1d6) = *(byte *)(iVar2 + 0x2b1d6) | 2;
  }
  else {
    *(byte *)(iVar2 + 0x2b1d6) = *(byte *)(iVar2 + 0x2b1d6) & 0xfd;
  }
  if ((int)((uint)*(byte *)(*(int *)(iVar1 + 4) + 0x1ce) << 0x1d) < 0) {
    *(byte *)(iVar2 + 0x2b1d6) = *(byte *)(iVar2 + 0x2b1d6) | 4;
  }
  else {
    *(byte *)(iVar2 + 0x2b1d6) = *(byte *)(iVar2 + 0x2b1d6) & 0xfb;
  }
  if ((int)((uint)*(byte *)(*(int *)(iVar1 + 4) + 0x1ce) << 0x1c) < 0) {
    *(byte *)(iVar2 + 0x2b1d6) = *(byte *)(iVar2 + 0x2b1d6) | 8;
  }
  else {
    *(byte *)(iVar2 + 0x2b1d6) = *(byte *)(iVar2 + 0x2b1d6) & 0xf7;
  }
  if ((int)((uint)*(byte *)(*(int *)(iVar1 + 4) + 0x1ce) << 0x1b) < 0) {
    *(byte *)(iVar2 + 0x2b1d6) = *(byte *)(iVar2 + 0x2b1d6) | 0x10;
  }
  else {
    *(byte *)(iVar2 + 0x2b1d6) = *(byte *)(iVar2 + 0x2b1d6) & 0xef;
  }
  if ((int)((uint)*(byte *)(*(int *)(iVar1 + 4) + 0x1ce) << 0x1a) < 0) {
    *(byte *)(iVar2 + 0x2b1d6) = *(byte *)(iVar2 + 0x2b1d6) | 0x20;
  }
  else {
    *(byte *)(iVar2 + 0x2b1d6) = *(byte *)(iVar2 + 0x2b1d6) & 0xdf;
  }
  if ((int)((uint)*(byte *)(*(int *)(iVar1 + 4) + 0x1ce) << 0x19) < 0) {
    *(byte *)(iVar2 + 0x2b1d6) = *(byte *)(iVar2 + 0x2b1d6) | 0x40;
  }
  else {
    *(byte *)(iVar2 + 0x2b1d6) = *(byte *)(iVar2 + 0x2b1d6) & 0xbf;
  }
  if ((int)((uint)*(byte *)(*(int *)(iVar1 + 4) + 0x1ce) << 0x18) < 0) {
    *(byte *)(iVar2 + 0x2b1d6) = *(byte *)(iVar2 + 0x2b1d6) | 0x80;
  }
  else {
    *(byte *)(iVar2 + 0x2b1d6) = *(byte *)(iVar2 + 0x2b1d6) & 0x7f;
  }
  if ((*(byte *)(*(int *)(iVar1 + 4) + 0x1cf) & 1) == 0) {
    *(byte *)(iVar2 + 0x2b1d7) = *(byte *)(iVar2 + 0x2b1d7) & 0xfe;
  }
  else {
    *(byte *)(iVar2 + 0x2b1d7) = *(byte *)(iVar2 + 0x2b1d7) | 1;
  }
  if ((int)((uint)*(byte *)(*(int *)(iVar1 + 4) + 0x1cf) << 0x1e) < 0) {
    *(byte *)(iVar2 + 0x2b1d7) = *(byte *)(iVar2 + 0x2b1d7) | 2;
  }
  else {
    *(byte *)(iVar2 + 0x2b1d7) = *(byte *)(iVar2 + 0x2b1d7) & 0xfd;
  }
  if ((int)((uint)*(byte *)(*(int *)(iVar1 + 4) + 0x1cf) << 0x1d) < 0) {
    *(byte *)(iVar2 + 0x2b1d7) = *(byte *)(iVar2 + 0x2b1d7) | 4;
  }
  else {
    *(byte *)(iVar2 + 0x2b1d7) = *(byte *)(iVar2 + 0x2b1d7) & 0xfb;
  }
  if ((int)((uint)*(byte *)(*(int *)(iVar1 + 4) + 0x1cf) << 0x1c) < 0) {
    *(byte *)(iVar2 + 0x2b1d7) = *(byte *)(iVar2 + 0x2b1d7) | 8;
  }
  else {
    *(byte *)(iVar2 + 0x2b1d7) = *(byte *)(iVar2 + 0x2b1d7) & 0xf7;
  }
  if ((int)((uint)*(byte *)(*(int *)(iVar1 + 4) + 0x1cf) << 0x1b) < 0) {
    *(byte *)(iVar2 + 0x2b1d7) = *(byte *)(iVar2 + 0x2b1d7) | 0x10;
  }
  else {
    *(byte *)(iVar2 + 0x2b1d7) = *(byte *)(iVar2 + 0x2b1d7) & 0xef;
  }
  if ((int)((uint)*(byte *)(*(int *)(iVar1 + 4) + 0x1cf) << 0x1a) < 0) {
    *(byte *)(iVar2 + 0x2b1d7) = *(byte *)(iVar2 + 0x2b1d7) | 0x20;
  }
  else {
    *(byte *)(iVar2 + 0x2b1d7) = *(byte *)(iVar2 + 0x2b1d7) & 0xdf;
  }
  if ((int)((uint)*(byte *)(*(int *)(iVar1 + 4) + 0x1cf) << 0x19) < 0) {
    *(byte *)(iVar2 + 0x2b1d7) = *(byte *)(iVar2 + 0x2b1d7) | 0x40;
  }
  else {
    *(byte *)(iVar2 + 0x2b1d7) = *(byte *)(iVar2 + 0x2b1d7) & 0xbf;
  }
  if ((int)((uint)*(byte *)(*(int *)(iVar1 + 4) + 0x1cf) << 0x18) < 0) {
    *(byte *)(iVar2 + 0x2b1d7) = *(byte *)(iVar2 + 0x2b1d7) | 0x80;
  }
  else {
    *(byte *)(iVar2 + 0x2b1d7) = *(byte *)(iVar2 + 0x2b1d7) & 0x7f;
  }
  if ((*(byte *)(*(int *)(iVar1 + 4) + 0x1d0) & 1) == 0) {
    *(byte *)(iVar2 + 0x2b1d8) = *(byte *)(iVar2 + 0x2b1d8) & 0xfe;
  }
  else {
    *(byte *)(iVar2 + 0x2b1d8) = *(byte *)(iVar2 + 0x2b1d8) | 1;
  }
  if ((int)((uint)*(byte *)(*(int *)(iVar1 + 4) + 0x1d0) << 0x1e) < 0) {
    *(byte *)(iVar2 + 0x2b1d8) = *(byte *)(iVar2 + 0x2b1d8) | 2;
  }
  else {
    *(byte *)(iVar2 + 0x2b1d8) = *(byte *)(iVar2 + 0x2b1d8) & 0xfd;
  }
  if ((int)((uint)*(byte *)(*(int *)(iVar1 + 4) + 0x1d0) << 0x1d) < 0) {
    *(byte *)(iVar2 + 0x2b1d8) = *(byte *)(iVar2 + 0x2b1d8) | 4;
  }
  else {
    *(byte *)(iVar2 + 0x2b1d8) = *(byte *)(iVar2 + 0x2b1d8) & 0xfb;
  }
  if ((int)((uint)*(byte *)(*(int *)(iVar1 + 4) + 0x1d0) << 0x1c) < 0) {
    *(byte *)(iVar2 + 0x2b1d8) = *(byte *)(iVar2 + 0x2b1d8) | 8;
  }
  else {
    *(byte *)(iVar2 + 0x2b1d8) = *(byte *)(iVar2 + 0x2b1d8) & 0xf7;
  }
  if ((int)((uint)*(byte *)(*(int *)(iVar1 + 4) + 0x1d0) << 0x1b) < 0) {
    *(byte *)(iVar2 + 0x2b1d8) = *(byte *)(iVar2 + 0x2b1d8) | 0x10;
  }
  else {
    *(byte *)(iVar2 + 0x2b1d8) = *(byte *)(iVar2 + 0x2b1d8) & 0xef;
  }
  if ((int)((uint)*(byte *)(*(int *)(iVar1 + 4) + 0x1d0) << 0x1a) < 0) {
    *(byte *)(iVar2 + 0x2b1d8) = *(byte *)(iVar2 + 0x2b1d8) | 0x20;
  }
  else {
    *(byte *)(iVar2 + 0x2b1d8) = *(byte *)(iVar2 + 0x2b1d8) & 0xdf;
  }
  if ((int)((uint)*(byte *)(*(int *)(iVar1 + 4) + 0x1d0) << 0x19) < 0) {
    *(byte *)(iVar2 + 0x2b1d8) = *(byte *)(iVar2 + 0x2b1d8) | 0x40;
  }
  else {
    *(byte *)(iVar2 + 0x2b1d8) = *(byte *)(iVar2 + 0x2b1d8) & 0xbf;
  }
  if ((int)((uint)*(byte *)(*(int *)(iVar1 + 4) + 0x1d0) << 0x18) < 0) {
    *(byte *)(iVar2 + 0x2b1d8) = *(byte *)(iVar2 + 0x2b1d8) | 0x80;
  }
  else {
    *(byte *)(iVar2 + 0x2b1d8) = *(byte *)(iVar2 + 0x2b1d8) & 0x7f;
  }
  if ((*(byte *)(*(int *)(iVar1 + 4) + 0x1d1) & 1) == 0) {
    *(byte *)(iVar2 + 0x2b1d9) = *(byte *)(iVar2 + 0x2b1d9) & 0xfe;
  }
  else {
    *(byte *)(iVar2 + 0x2b1d9) = *(byte *)(iVar2 + 0x2b1d9) | 1;
  }
  if ((int)((uint)*(byte *)(*(int *)(iVar1 + 4) + 0x1d1) << 0x1e) < 0) {
    *(byte *)(iVar2 + 0x2b1d9) = *(byte *)(iVar2 + 0x2b1d9) | 2;
  }
  else {
    *(byte *)(iVar2 + 0x2b1d9) = *(byte *)(iVar2 + 0x2b1d9) & 0xfd;
  }
  if ((int)((uint)*(byte *)(*(int *)(iVar1 + 4) + 0x1d1) << 0x1d) < 0) {
    *(byte *)(iVar2 + 0x2b1d9) = *(byte *)(iVar2 + 0x2b1d9) | 4;
  }
  else {
    *(byte *)(iVar2 + 0x2b1d9) = *(byte *)(iVar2 + 0x2b1d9) & 0xfb;
  }
  if ((int)((uint)*(byte *)(*(int *)(iVar1 + 4) + 0x1d1) << 0x1c) < 0) {
    *(byte *)(iVar2 + 0x2b1d9) = *(byte *)(iVar2 + 0x2b1d9) | 8;
  }
  else {
    *(byte *)(iVar2 + 0x2b1d9) = *(byte *)(iVar2 + 0x2b1d9) & 0xf7;
  }
  if ((int)((uint)*(byte *)(*(int *)(iVar1 + 4) + 0x1d1) << 0x1b) < 0) {
    *(byte *)(iVar2 + 0x2b1d9) = *(byte *)(iVar2 + 0x2b1d9) | 0x10;
  }
  else {
    *(byte *)(iVar2 + 0x2b1d9) = *(byte *)(iVar2 + 0x2b1d9) & 0xef;
  }
  uVar4 = Get_Certain_Stored_Value(uVar3,0x3b);
  *(undefined4 *)(iVar2 + 0x2a0f4) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x3c);
  *(undefined4 *)(iVar2 + 0x2a0f8) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x3d);
  *(undefined4 *)(iVar2 + 0x2a0fc) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x3e);
  *(undefined4 *)(iVar2 + 0x2a100) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x3f);
  *(undefined4 *)(iVar2 + 0x2a104) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x40);
  *(undefined4 *)(iVar2 + 0x2a108) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x42);
  *(undefined4 *)(iVar2 + 0x2a110) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x43);
  *(undefined4 *)(iVar2 + 0x2a114) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x44);
  *(undefined4 *)(iVar2 + 0x2a118) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0xc2);
  *(undefined4 *)(iVar2 + 0x2a310) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0xfa);
  *(undefined4 *)(iVar2 + 0x2a3f0) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0xfb);
  *(undefined4 *)(iVar2 + 0x2a3f4) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0xfc);
  *(undefined4 *)(iVar2 + 0x2a3f8) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0xfd);
  *(undefined4 *)(iVar2 + 0x2a3fc) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0xfe);
  *(undefined4 *)(iVar2 + 0x2a400) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0xff);
  *(undefined4 *)(iVar2 + 0x2a404) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x100);
  *(undefined4 *)(iVar2 + 0x2a408) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x101);
  *(undefined4 *)(iVar2 + 0x2a40c) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x102);
  *(undefined4 *)(iVar2 + 0x2a410) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x103);
  *(undefined4 *)(iVar2 + 0x2a414) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x104);
  *(undefined4 *)(iVar2 + 0x2a418) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x105);
  *(undefined4 *)(iVar2 + 0x2a41c) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x106);
  *(undefined4 *)(iVar2 + 0x2a420) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x107);
  *(undefined4 *)(iVar2 + 0x2a424) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x108);
  *(undefined4 *)(iVar2 + 0x2a428) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x109);
  *(undefined4 *)(iVar2 + 0x2a42c) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x10a);
  *(undefined4 *)(iVar2 + 0x2a430) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x10b);
  *(undefined4 *)(iVar2 + 0x2a434) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x10c);
  *(undefined4 *)(iVar2 + 0x2a438) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x10d);
  *(undefined4 *)(iVar2 + 0x2a43c) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x10e);
  *(undefined4 *)(iVar2 + 0x2a440) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x10f);
  *(undefined4 *)(iVar2 + 0x2a444) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x110);
  *(undefined4 *)(iVar2 + 0x2a448) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x111);
  *(undefined4 *)(iVar2 + 0x2a44c) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x112);
  *(undefined4 *)(iVar2 + 0x2a450) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x113);
  *(undefined4 *)(iVar2 + 0x2a454) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x1a7);
  *(undefined4 *)(iVar2 + 0x2a6a4) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x1a8);
  *(undefined4 *)(iVar2 + 0x2a6a8) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x1a9);
  *(undefined4 *)(iVar2 + 0x2a6ac) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x1aa);
  *(undefined4 *)(iVar2 + 0x2a6b0) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x1ab);
  *(undefined4 *)(iVar2 + 0x2a6b4) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x1ac);
  *(undefined4 *)(iVar2 + 0x2a6b8) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x1ad);
  *(undefined4 *)(iVar2 + 0x2a6bc) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x1ae);
  *(undefined4 *)(iVar2 + 0x2a6c0) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x1af);
  *(undefined4 *)(iVar2 + 0x2a6c4) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x1b0);
  *(undefined4 *)(iVar2 + 0x2a6c8) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x1b1);
  *(undefined4 *)(iVar2 + 0x2a6cc) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x1b2);
  *(undefined4 *)(iVar2 + 0x2a6d0) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x1b3);
  *(undefined4 *)(iVar2 + 0x2a6d4) = uVar4;
  uVar4 = Get_Certain_Stored_Value(uVar3,0x1b4);
  *(undefined4 *)(iVar2 + 0x2a6d8) = uVar4;
  uVar4 = FUN_0883752c(uVar3,0x96);
  *(undefined4 *)(iVar2 + 0x2aa60) = uVar4;
  uVar4 = FUN_0883752c(uVar3,0x97);
  *(undefined4 *)(iVar2 + 0x2aa64) = uVar4;
  uVar4 = FUN_0883752c(uVar3,0x98);
  *(undefined4 *)(iVar2 + 0x2aa68) = uVar4;
  uVar4 = FUN_0883752c(uVar3,0x99);
  *(undefined4 *)(iVar2 + 0x2aa6c) = uVar4;
  uVar4 = FUN_0883752c(uVar3,0x9a);
  *(undefined4 *)(iVar2 + 0x2aa70) = uVar4;
  uVar4 = FUN_0883752c(uVar3,0x9b);
  *(undefined4 *)(iVar2 + 0x2aa74) = uVar4;
  uVar4 = FUN_0883752c(uVar3,0x9c);
  *(undefined4 *)(iVar2 + 0x2aa78) = uVar4;
  uVar4 = FUN_0883752c(uVar3,0x9d);
  *(undefined4 *)(iVar2 + 0x2aa7c) = uVar4;
  uVar4 = FUN_0883752c(uVar3,0x9e);
  *(undefined4 *)(iVar2 + 0x2aa80) = uVar4;
  uVar3 = FUN_0883752c(uVar3,0x9f);
  *(undefined4 *)(iVar2 + 0x2aa84) = uVar3;
  uVar3 = FUN_08877b6c(1);
  FUN_08877d10(uVar3,2000);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

