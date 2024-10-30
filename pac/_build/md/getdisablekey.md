# getDisableKey

Gets if the key input is disabled through [setDisableKey](./setdisablekey.md).

## Code Information

- **Name**: `getDisableKey`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 09 00`
- **Assembly Address in Memory** : `0x8970730`

## Parameters

- `(int *)destination` *(8 bytes)* : Variable to *store* whether the key is disabled or not, please describe what 0 and 1 means.

## Example

Here is one example in hex:

```25 0c 09 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getDisableKey((int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08970730(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  *puVar1 = 0;
  iVar2 = *(int *)(*(int *)(param_1 + 0x10) + 0x158);
  if (iVar2 != 0) {
    *puVar1 = *(undefined4 *)(iVar2 + 0x3f6c);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

