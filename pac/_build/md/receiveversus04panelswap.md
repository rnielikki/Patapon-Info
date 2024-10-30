# receiveVersus04PanelSwap

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `receiveVersus04PanelSwap`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 fe 00`
- **Assembly Address in Memory** : `0x8924f24`

## Parameters

- `(uint...)Vars0` *(>= 8 bytes)*

`...` means any amounts of parameter.

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08924f24(int param_1,undefined4 param_2)

{
  uint *puVar1;
  uint **ppuVar2;
  int iVar3;
  byte local_28;
  byte local_27;
  byte local_26;
  byte local_25;
  byte local_24;
  byte local_23;
  byte local_22;
  byte local_21;
  uint *local_20 [4];
  uint *local_10;
  uint *local_c;
  uint *local_8;
  uint *local_4;
  
  iVar3 = 0;
  ppuVar2 = local_20;
  do {
    puVar1 = (uint *)Pac_Get_Param(param_2,iVar3,1,4);
    *ppuVar2 = puVar1;
    *puVar1 = 0xffffffff;
    iVar3 = iVar3 + 1;
    ppuVar2 = ppuVar2 + 1;
  } while (iVar3 < 8);
  iVar3 = *(int *)(*(int *)(param_1 + 0x10) + 0x2d8);
  if (((iVar3 != 0) && (iVar3 = *(int *)(iVar3 + 0x68), iVar3 != 0)) &&
     (*(char *)(iVar3 + 0xa8) != '\0')) {
    FUN_089f03a8(iVar3,&local_28);
    *local_20[0] = (uint)local_28;
    *local_20[1] = (uint)local_27;
    *local_20[2] = (uint)local_26;
    *local_20[3] = (uint)local_25;
    *local_10 = (uint)local_24;
    *local_c = (uint)local_23;
    *local_8 = (uint)local_22;
    *local_4 = (uint)local_21;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

