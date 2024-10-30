# isHeroMode

Checks if a unit is currently in heromode or not.

## Code Information

- **Name**: `isHeroMode`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 16 00`
- **Assembly Address in Memory** : `0x8970dac`

## Parameters

- `(Undefined)Var0` *(8 bytes)* : This parameter does nothing.
- `(bool *)destination` *(8 bytes)* : Variable to *store* if it is in heromode. **0 if it is not in heromode**.

## Example

Here is one example in hex:

```25 0c 16 00 / 02 00 00 00 / 00 00 00 00 / 04 00 00 00 / 05 00 00 00```

Which is interpreted as:

```c
isHeroMode((int)0, (int *)iVar5)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08970dac(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  Pac_Get_Param(param_2,0,1,4);
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar2 = *(int *)(*(int *)(param_1 + 0x10) + 0x158);
  *puVar1 = 0;
  if (iVar2 != 0) {
    *puVar1 = 0;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

