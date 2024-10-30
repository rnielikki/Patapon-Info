# readCacheFile

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `readCacheFile`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 09 0f 00`
- **Assembly Address in Memory** : `0x8949198`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(String)Var1`

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08949198(undefined4 param_1,undefined4 param_2)

{
  char *pcVar1;
  undefined4 *puVar2;
  char *pcVar3;
  undefined4 uVar4;
  char *pcVar5;
  char local_100 [256];
  
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  pcVar3 = &DAT_00000100;
  pcVar5 = local_100;
  pcVar1 = pcVar5;
  while (pcVar1 != (char *)0x0) {
    *pcVar5 = '\0';
    pcVar5 = pcVar5 + 1;
    pcVar3 = pcVar3 + -1;
    pcVar1 = pcVar3;
  }
  Pac_Get_StringParam(param_2,local_100);
  uVar4 = FUN_0884a440(1);
  Data::Load_File_From_Bnd(uVar4,local_100,FUN_08882570,*puVar2,0x1000,0,0,0,0,0);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

