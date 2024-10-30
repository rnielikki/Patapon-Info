# sendCommand

Sends command as given command ID. Originally meant for debug mode.

- This **does nothing with drum hit**.
  - This alone does not cancel drumming neither fever.
- This **does not activate heromode**. Best seen in DoI Piekron heromode reset.
- Originally from Debug mode, usd in Queen Kharma's "Bada Bada Bada Bon" and DoI random command.
- For auto command with drumming (and also heromode), check [setAutoCommand](./setautocommand.md).

## Code Information

- **Name**: `sendCommand`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 0c 00`
- **Assembly Address in Memory** : `0x89708b0`

## Parameters

- `(int)Command ID` *(8 bytes)* : [Command ID](./guide/reference-table.md#command-ids) to send.

## Remarks

This does not activate actual summon (witn 9 as parameter). However, this does active [character behaviours during summon](https://rnielikki.github.io/pata/resources/summon.html).

## Example

Here is one example in hex:

```25 0c 0c 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
sendCommand((int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089708b0(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = *(int *)(*(int *)(param_1 + 0x10) + 0x158);
  if (iVar2 != 0) {
    func_0x08b5f678(iVar2,*puVar1);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

