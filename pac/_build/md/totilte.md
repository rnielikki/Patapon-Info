# toTilte

Move to the title menu.

## Code Information

- **Name**: `toTilte`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 28 00`
- **Assembly Address in Memory** : `0x8b4fea0`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 1c 28 00```

Which is interpreted as:

```c
toTilte()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4fea0(int param_1,undefined4 param_2)

{
  undefined4 uVar1;
  int iVar2;
  
  uVar1 = Save::Get_Save_BaseAddr(1);
  uVar1 = Save::Get_BaseAddr__0x78(uVar1,1);
  iVar2 = FUN_089482b0(uVar1);
  *(undefined *)(iVar2 + 0x354) = 1;
  FUN_Azito__08aca818(*(undefined4 *)(*(int *)(param_1 + 0x10) + 500));
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

