# setLaboInfo

Sets certain types of information. See also: [getLaboInfo](./getlaboinfo.md).

## Code Information

- **Name**: `setLaboInfo`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 06 00`
- **Assembly Address in Memory** : `0x89499b0`

## Parameters

- `(int)labo_type` *(8 bytes)* : The "labo type" to set the value.
- `(int)value` *(8 bytes)* : The value to set to given labo type, expected boolean.

Works only with `labo_type` 7~9.

|Id|Value 0|Value 1|
|---|---|---|
|0x7|Not connected or connecting|Fully connected in multi|
|0x8|unused|unused|
|0x9|Uberhero|Dark hero|


## Example

Here is one example in hex:

```25 0a 06 00 / 02 00 00 00 / 07 00 00 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
setLaboInfo((int)7, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089499b0(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 uVar2;
  int iVar3;
  int iVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  iVar4 = *piVar1;
  piVar1 = (int *)Pac_Get_Param(param_2,1,1,4);
  if (*(int *)(param_1 + 0x10) != 0) {
    Save::Get_Save_BaseAddr(1);
    uVar2 = Save::Get_Save_BaseAddr(1);
    iVar3 = Save::Get_BaseAddr__0x78(uVar2,1);
    if (iVar4 == 9) {
      iVar4 = Save::Get_Save_BaseAddr(1);
      iVar4 = return__0x285a8(*(undefined4 *)(iVar4 + 0x50));
      *(int *)(iVar4 + 0x11b4) = *piVar1;
    }
    else if (iVar4 == 8) {
      *(bool *)(*(int *)(iVar3 + 0x44) + 0x3e) = *piVar1 != 0;
    }
    else if (iVar4 == 7) {
      FUN_0898d54c(*(int *)(iVar3 + 0x44),*piVar1 != 0);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

