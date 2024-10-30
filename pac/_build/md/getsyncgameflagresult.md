# getSyncGameFlagResult

Checks if succesfully joined to the other's hideout. Guest only.

## Code Information

- **Name**: `getSyncGameFlagResult`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 27 00`
- **Assembly Address in Memory** : `0x8b4fe28`

## Parameters

- `(int *)status` *(8 bytes)* : Variable to *store* the joining status, 1 joining, -1 failed to join, 0 succesfully joined.

## Example

Here is one example in hex:

```25 1c 27 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getSyncGameFlagResult((int *)iVar0)
```

```c
0000CB08  251C2600:startSyncGameFlag()
0000CB0C  25000F00:cmd_waitFrame(2:1)
0000CB18  251C2700:getSyncGameFlagResult(4:0)
0000CB24  25001700:cmd_ifEQ(4:0, 1.0, 1:CB0C)
0000CB3C  25001B00:cmd_ifLS(4:0, 0.0, 1:99EC)
0000CB54  25000200:cmd_jmp(1:99DC)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4fe28(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 uVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  if (*(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x214) + 0x38) != 0) {
    uVar2 = FUN_Azito__08b546d8();
    *puVar1 = uVar2;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

