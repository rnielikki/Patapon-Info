# getPadDirect

Gets keys that are *just started to be pressed* as flag.

## Code Information

- **Name**: `getPadDirect`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 09 02 00`
- **Assembly Address in Memory** : `0x89489e4`

## Parameters

- `(int *)destination` *(8 bytes)* : Variable to *store* the just pressed [keys as flag](./guide/reference-table.md#input-id-flags).

## Example

Here is one example in hex:

```25 09 02 00 / 04 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
getPadDirect((int *)iVar1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089489e4(undefined4 param_1,undefined4 param_2)

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
    *puVar2 = **(undefined4 **)(iVar4 + 0x10c);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

