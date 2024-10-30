# setCameraSight

Meant for debug mode. Doesn't work correctly.

## Code Information

- **Name**: `setCameraSight`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 83 00`
- **Assembly Address in Memory** : `0x8921478`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(Undefined)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 83 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setCameraSight((int)1, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08921478(int param_1,undefined4 param_2)

{
  int *piVar1;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  Pac_Get_Param(param_2,1,1,4);
  if (*(int *)(param_1 + 0x10) != 0) {
    FUN_0890fa64(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xd8),*piVar1 != 0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

