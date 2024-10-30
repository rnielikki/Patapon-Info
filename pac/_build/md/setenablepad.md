# setEnablePad

Enables/Disables input interaction **in hideout**.

The input is disabled e.g. in scene change, hideout open/close animation, data saving dialog.

## Code Information

- **Name**: `setEnablePad`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 05 00`
- **Assembly Address in Memory** : `0x8b4d478`

## Parameters

- `(bool)enable_input` *(8 bytes)* : 1 enables input, 0 disables input.

## Example

Here is one example in hex:

```25 1c 05 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setEnablePad((int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4d478(int param_1,undefined4 param_2)

{
  int *piVar1;
  int iVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  iVar3 = *piVar1;
  iVar2 = *(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x10) + 0x14);
  if (iVar2 != 0) {
    *(bool *)(iVar2 + 0x60) = iVar3 != 0;
    *(bool *)(*(int *)(*(int *)(param_1 + 0x10) + 0x1c4) + 0x21) = iVar3 != 0;
    if (iVar3 == 0) {
      FUN_08852af4(iVar2 + 100);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

