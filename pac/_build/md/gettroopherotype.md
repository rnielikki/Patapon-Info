# getTroopHeroType

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getTroopHeroType`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 40 01`
- **Assembly Address in Memory** : `0x892b1b8`

## Parameters

- `(uint)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 40 01 / 04 00 00 00 / 02 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getTroopHeroType((int *)iVar2, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892b1b8(undefined4 param_1,undefined4 param_2)

{
  uint *puVar1;
  int *piVar2;
  int iVar3;
  
  puVar1 = (uint *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  *puVar1 = 0;
  if ((-1 < *piVar2) && (*piVar2 < 2)) {
    iVar3 = Get_Some_Flag(1);
    *puVar1 = *(int *)(*(int *)(iVar3 + 0x44) + *piVar2 * 0x58a4 + 0x2558) < 0x1c ^ 1;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

