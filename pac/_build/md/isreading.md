# isReading

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `isReading`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 09 0b 00`
- **Assembly Address in Memory** : `0x894900c`

## Parameters

- `(uint)Var0` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894900c(undefined4 param_1,undefined4 param_2)

{
  uint *puVar1;
  int iVar2;
  uint uVar3;
  
  puVar1 = (uint *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = FUN_08842ef4(1);
  uVar3 = DLC::Get_Loading_Status(*(undefined4 *)(iVar2 + 0x28),0);
  *puVar1 = uVar3 & 0xff;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

