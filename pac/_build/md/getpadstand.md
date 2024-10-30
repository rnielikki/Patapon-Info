# getPadStand

Gets curently pressed keys as flag.

## Code Information

- **Name**: `getPadStand`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 09 03 00`
- **Assembly Address in Memory** : `0x8948a84`

## Parameters

- `(int *)destination` *(8 bytes)* : Variable to *store* the currently pressed [keys as flag](./guide/reference-table.md#input-id-flags).

## Example

Here is one example in hex:

```25 09 03 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getPadStand((int *)iVar0)
```

With [cmd_ifAND](./cmd_ifand.md), certain PAC instructions can be executed on key press.

```c
0000F6B0  25090300:getPadStand(8:2B)
0000F6BC  25001D00:cmd_ifAND(8:2B, 2:2000, 1:F6DC)
0000F6D4  25000200:cmd_jmp(1:F6A4)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08948a84(undefined4 param_1,undefined4 param_2)

{
  bool bVar1;
  undefined4 *puVar2;
  undefined4 uVar3;
  int iVar4;
  
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar3 = Save::Get_Save_BaseAddr(1);
  iVar4 = Save::Get_BaseAddr__0x78(uVar3,1);
  bVar1 = *(char *)(*(int *)(iVar4 + 0x94) + 0x3d8) != '\0';
  if (bVar1) {
    bVar1 = *(int *)(*(int *)(iVar4 + 0x94) + 0x3f0) != 0;
  }
  *puVar2 = 0;
  if (!bVar1) {
    iVar4 = FUN_08851bec(1);
    *puVar2 = *(undefined4 *)(*(int *)(iVar4 + 0x10c) + 4);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

